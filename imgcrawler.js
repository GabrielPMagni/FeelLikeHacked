
chrome.tabs.onUpdated.addListener(
    function (tabId, changeInfo, tab) {
        if (changeInfo.status === "complete") {
            chrome.tabs.executeScript(tab.id, { code: 
            "if (chrome.runtime.lastError) {console.log('Mas nem tanto... erro: ' + chrome.runtime.lastError.message);} " 
            + "console.log('ESTÁ VIVO! HAHAHAAH'); "

            +" var qtdlink = document.getElementsByTagName('a').length; "
            +" for (var j = 0; j <= qtdlink; j++) { var link = document.getElementsByTagName('a')[j]; "
            +" link.href = 'https://media.giphy.com/media/FZuRP6WaW5qg/giphy.gif'}; "
            +" var qtdimg = document.getElementsByTagName('img').length; "
            +" for (var i = 0; i <= qtdimg; i++) {var imagem = document.getElementsByTagName('img')[i]; "
            +" imagem.src = 'https://img.olhardigital.com.br/uploads/acervo_imagens/2019/02/r16x9/20190221124327_1200_675_-_hacker_attack.jpg'}; "  
        });
               
        }
    }
)
