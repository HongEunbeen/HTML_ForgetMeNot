    var plus = 0;
        var count = 0;
    function fun_heart(){
        plus++;
        alert(plus+"회 관심을 주셨습니다.");
    }
    function fun_good(){
        count++;
        alert(count+"회 좋아요를 눌려주셨습니다.");
    }
           
var coin = 0;
    function fun_bank(){
        anwser = confirm("재단에 기부를 하시겠습니까?")
        if(anwser == true){
            coin = prompt("기부할 금액을 적어 주세요","1000");
            con = confirm(coin+"만큼 기부하시는거 맞으십니까?");
            if(con == true){ 
                alert(coin+"원 기부해 주셔서 감사합니다.");
            }
            else{
                alert("다시 시도해 주시길 바랍니다. 감사합니다.");
            } 
            
        }
        else {
            alert("감사합니다.");
        }
    }
    function fun_har(){
       anwser = confirm("할머님께 직접 기부를 하시겠습니까?")
        if(anwser == true){
            coin = prompt("기부할 금액을 적어 주세요","1000");
            con = confirm(coin+"만큼 기부하시는거 맞으십니까?");
            if(con == true){ 
                alert(coin+"원 기부해 주셔서 감사합니다.");
            }
            else{
                alert("다시 시도해 주시길 바랍니다. 감사합니다.");
            } 
            
        }
        else {
            alert("감사합니다.");
        }
    }
    