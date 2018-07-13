import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.window

class Teste(){

    fun seEstaVivo(url : String, numeroTentativas : Int) {

        val verbo = "GET"

        var x = numeroTentativas

        while (x > 0){
            if (requisitar(verbo, url))
                println("Ativo")
            else
                println("Inativo")

            x--;
        }
    }

    private fun requisitar (verbo : String, url : String) : Boolean{
        var req = XMLHttpRequest()
        req.open(verbo, url, false)
        req.send(null);
        return  !req.responseText.equals("")
    }

}

