class UI{

    static changeIt(result){
        document.getElementById("outputResult").value=result;
    }
    static changeOutput(first,second){
        document.getElementById("outputFirst").textContent=first;
        document.getElementById("outputSecond").textContent=second;
    }
}