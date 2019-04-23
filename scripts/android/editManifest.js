module.exports = function(context) {
    const fs = require('fs')
    const path = require('path')
    const Q = require('q')
    const xml = require('cordova-common').xmlHelpers

    const deferred = Q.defer()

    const platformRoot = path.join(context.opts.projectRoot, './platforms/android')

    const filepaths = [
        path.join(platformRoot, './AndroidManifest.xml'),
        path.join(platformRoot, './app/src/main/AndroidManifest.xml'),
    ]

    const filepath = filepaths.find(function(filepath) {
        try {
            fs.accessSync(filepath, fs.constants.F_OK)
            return true
        } catch (err) {
            return false
        }
    })

    let doc

    if (filepath != null) {
        doc = xml.parseElementtreeSync(filepath)
        doc.getroot().find('./application').attrib['android:name'] =
            'androidx.multidex.MultiDexApplication'
        fs.writeFileSync(filepath, doc.write({ indent: 4 }))
        deferred.resolve()
    } else {
        deferred.reject(new Error("Can't find AndroidManifest.xml"))
    }

    return deferred.promise
}
