/*
 * Download links configuration
 */

var baseCommunityLink = "https://github.com/Wakanda/wakanda-digital-app-factory/releases/download/";

var versionCommunityLink = { stable: "1.1.3", preview: "2.0.1" };

function partialCommunityLink(stableOrPreview, allOrServer) { 
    return baseCommunityLink+"v"+versionCommunityLink[stableOrPreview]+"/wakanda-community-"+allOrServer+"_"+versionCommunityLink[stableOrPreview]+"_";
}

function communityLinks(stableOrPreview) {
    return {
        macOS: partialCommunityLink(stableOrPreview,"all")+"x64.dmg",
        win32: partialCommunityLink(stableOrPreview,"all")+"x86.msi",
        win64: partialCommunityLink(stableOrPreview,"all")+"x64.msi",
        linux32: partialCommunityLink(stableOrPreview,"server")+"amd64.deb",
        linux64: partialCommunityLink(stableOrPreview,"server")+"i386.deb"
    }
}

var enterpriseLink = "http://www.wakanda.io/wakanda-app-factory"

/*
 * Download button utils function
 */

var platformLinkCollection = {
    enterprise : {
        osx: enterpriseLink,
        win32: enterpriseLink,
        win64: enterpriseLink,
        linux32: enterpriseLink,
        linux64: enterpriseLink
    },
    community : communityLinks("stable"),
    communityPreview : communityLinks("preview")
};

var downloadLabel = "";
var communityDownloadLink = "";

function getPlatform() {
    var OS = "";
    if (/Windows|Win32|WOW64|Win64/.test(navigator.userAgent)) {
        OS = "win64"
        if (/Win32/.test(navigator.appVersion + navigator.userAgent)) {
            OS = "win32";
        }
    } else if (/Mac/.test(navigator.userAgent)) {
        OS = "macOS";
    } else if (/Linux|X11/.test(navigator.userAgent)) {
        OS = "linux64";
        if (/i686|i386/.test(navigator.appVersion + navigator.userAgent)) {
            OS = "linux32";
        }
    }
    return OS;
}

var platformNames = {
    macOS: "macOS",
    win64: "Windows",
    win32: "Windows (32 bits)",
    linux64: "Linux",
    linux32: "Linux (32 bits)"
};

/**
 * Download button main logic
 */

var stableLinks = communityLinks("stable");
var previewLinks = communityLinks("preview");
var platform = getPlatform();

// Button Community
// Replace console.log with proper html tags:
console.log("// Download Button Community:")
console.log("Download for "+platformNames[platform]+"\n(Stable v"+versionCommunityLink["stable"]+")");
console.log(stableLinks[platform]);

/** Button dropdown alternative links

                  Stable      Preview
macOS               x           x
Windows             x           x
Windows (32 bits)   x           x
Linux               x           x
Linux (32 bits)     x           x

x = <i class="fa fa-arrow-down" aria-hidden="true"></i>
*/

console.log("// Dropdown for Community")
for (var key in platformNames) {
    // Replace console.log with proper html tags:
    console.log(platformNames[key]);
    console.log(stableLinks[key]);
    console.log(previewLinks[key]);
};

// Button Enterprise 
// Replace console.log with proper html tags:
console.log("\n// Download Button Enterprise:")
console.log("Download for "+platformNames[platform]+"\n(Stable v"+versionCommunityLink["stable"]+")");
console.log(enterpriseLink); // redirect to a register (email required to get the enterprise trial)
console.log("// Dropdown for Enterprise")
console.log("No alternative downloads");
