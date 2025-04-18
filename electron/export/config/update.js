const uaup = require('uaup-js');

const defaultStages = {
    Checking: "Checking For Updates!", // When Checking For Updates.
    Found: "Found! An Update",  // If an Update is Found.
    NotFound: "No Update Found.", // If an Update is Not Found.
    Downloading: "Downloading Villagers...", // When Downloading Update.
    Unzipping: "Installing IronGolems...", // When Unzipping the Archive into the Application Directory.
    Cleaning: "Finalizing Updates...", // When Removing Temp Directories and Files (ex: update archive and tmp directory).
    Launch: "Launching..." // When Launching the Application.
};



const updateOptions = {
    gitRepo: "Packages", // [Required] Your Repo Name
    gitUsername: "LocalMiner",  // [Required] Your GitHub Username.
    
    appName: "LocalMiner", //[Required] The Name of the app archive and the app folder.
    appExecutableName: "LocalMinerRun.exe", //[Required] The Executable of the Application to be Run after updating.

    progressBar: document.getElementById("xprogress"), // {Default is null} [Optional] If Using Electron with a HTML Progressbar, use that element here, otherwise ignore
    label: document.getElementById("localxlable"), // {Default is null} [Optional] If Using Electron, this will be the area where we put status updates using InnerHTML
    forceUpdate: false,
    stageTitles: defaultStages, // {Default is defaultStages} [Optional] Sets the Status Title for Each Stage
};

setTimeout(function () {
    uaup.Update(updateOptions);
}, 2000);
