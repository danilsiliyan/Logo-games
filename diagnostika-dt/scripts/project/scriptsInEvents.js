


const scriptsInEvents = {

	async SpisokSobiti_Event136_Act9(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
		     ysdk.adv.showFullscreenAdv();
		});
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

