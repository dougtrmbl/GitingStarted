$(document).ready(function() {

    var op=[];
   var equals;
   var num;
   var x;
   var y;
   var arr=[];
   var newArr=[];
   var firstArr=[];
   var secArr=[];



function reset() {
    op=[];
    firstArr=[];
    secArr=[];
    arr=[];
    newArr=[];
}

function forDecimalInFirst() {
    for(var i=0; i<firstArr.indexOf("."); i++) {
        var l = firstArr.indexOf(".")-[i+1];
       
            arr.push(firstArr[i] * 10**l);
        
         }
    for(var f=firstArr.indexOf(".")+1; f<firstArr.length; f++) {
        var o = f-firstArr.indexOf(".");

        arr.push(firstArr[f] * 0.1 ** o);
    }
    for(var e=0; e<secArr.length; e++) {
        var m = secArr.length-[e+1];
       

    newArr.push(secArr[e] * 10**m);
        
    }
    x=arr.reduce(function(a,b) {
        return a + b;
    });
    y=newArr.reduce(function(a,b) {
        return a + b;
    });

$('#history').html(x + " "+op+" " + y + " = " + operators[op](x,y));
return $('#display').html(operators[op](x,y));
};
 function forDecimalInSec() {
    for(var i=0; i<firstArr.length; i++) {
        var l = firstArr.length-[i+1];
       
            arr.push(firstArr[i] * 10**l);
        
         }
         for(var d=0; d<secArr.indexOf("."); d++) {
            var l = secArr.indexOf(".")-[d+1];
           
                newArr.push(secArr[d] * 10**l);
            
             }
        for(var f=secArr.indexOf(".")+1; f<secArr.length; f++) {
            var o = f-secArr.indexOf(".");
    
            newArr.push(secArr[f] * 0.1 ** o);
        }
        x=arr.reduce(function(a,b) {
            return a + b;
        });
        y=newArr.reduce(function(a,b) {
            return a + b;
        });
 
   $('#history').html(x + " "+op+" " + y + " = " + operators[op](x,y));
    return $('#display').html(operators[op](x,y));
    };

 

function forDecimalInBoth() {
    for(var i=0; i<firstArr.indexOf("."); i++) {
        var l = firstArr.indexOf(".")-[i+1];
       
            arr.push(firstArr[i] * 10**l);
        
         }
    for(var f=firstArr.indexOf(".")+1; f<firstArr.length; f++) {
        var o = f-firstArr.indexOf(".");

        arr.push(firstArr[f] * 0.1 ** o);
    }
            for(var e=0; e<secArr.indexOf("."); e++) {
                var m = secArr.indexOf(".")-[e+1];
               
        
            newArr.push(secArr[e] * 10**m);
                
            }
    for(var d=secArr.indexOf(".")+1; d<secArr.length; d++) {
                var g = d-secArr.indexOf(".");
        
                newArr.push(secArr[d] * 0.1 ** g);
            }
            x=arr.reduce(function(a,b) {
                return a + b;
            });
            y=newArr.reduce(function(a,b) {
                return a + b;
            });
     
       $('#history').html(x + " "+op+" " + y + " = " + operators[op](x,y));
        return $('#display').html(operators[op](x,y));
        };


function answer() {
    
    for(var i=0; i<firstArr.length; i++) {
        var l = firstArr.length-[i+1];
       
            arr.push(firstArr[i] * 10**l);
        
         }
            for(var e=0; e<secArr.length; e++) {
                var m = secArr.length-[e+1];
               
        
            newArr.push(secArr[e] * 10**m);
                
            }
            x=arr.reduce(function(a,b) {
                return a + b;
            });
            y=newArr.reduce(function(a,b) {
                return a + b;
            });
     
       $('#history').html(x + " "+op+" " + y + " = " + operators[op](x,y));
        return $('#display').html(operators[op](x,y));
        };


   var operators= {
       "x" : function(a, b) {return a * b},
       "/" : function(a, b) {return a / b},
       "+" : function(a, b) {return a + b},
       "-" : function(a, b) {return a - b}
   };

   $('#CE').on('click', function() {
    firstArr=[];
    secArr=[];
    arr=[];
    newArr=[];
    op=[];
    $('#display').html("0");
});
   

    $('#7').on('click', function () {
        if(op.length<1) {
            firstArr.push(7);
            return $('#display').html(firstArr);
    }else{ 
            secArr.push(7);
        return $('#display').html(secArr);
            };
        });
    
    $('#8').on('click', function() {
        if(op.length<1) {
            firstArr.push(8);
            return $('#display').html(firstArr);
        }else{
            secArr.push(8);
        return $('#display').html(secArr);
        };
    });
    $('#9').on('click', function() {
        if(op.length<1) {
            firstArr.push(9);
            return $('#display').html(firstArr);
        }else{
           secArr.push(9);
        return $('#display').html(secArr);
        };
    });
    $('#4').on('click', function() {
        if(op.length<1) {
            firstArr.push(4);
            return $('#display').html(firstArr);
        }else{
            secArr.push(4);
        return $('#display').html(secArr);
        };
    });

    $('#5').on('click', function() {
        if(op.length<1) {
            firstArr.push(5);
            return $('#display').html(firstArr);
        }else{
            secArr.push(5);
        return $('#display').html(secArr);
        };
    });

    $('#6').on('click', function() {
        if(op.length<1) {
            firstArr.push(6);
            return $('#display').html(firstArr);
        }else{
            secArr.push(6);
        return $('#display').html(secArr);
        };
    });

    $('#2').on('click', function() {
        if(op.length<1) {
            firstArr.push(2);
            return $('#display').html(firstArr);
        }else{
            secArr.push(2);
        return $('#display').html(secArr);
        };
    });

    $('#3').on('click', function() {
        if(op.length<1) {
            firstArr.push(3);
            return $('#display').html(firstArr);
        }else{
                secArr.push(3);
        return $('#display').html(secArr);
        };
    });

        $('#1').on('click', function() {
            if(op.length<1) {
                firstArr.push(1);
                return $('#display').html(firstArr);
            }else{
                secArr.push(1);
            return $('#display').html(secArr);
            };
        });
    
        $('#0').on('click', function() {
            if(op.length<1) {
                firstArr.push(0);
                return $('#display').html(firstArr);
            }else{
                secArr.push(0);
                return $('#display').html(secArr);
            };
        });
        $('#point').on('click', function() {
            if(op.length<1) {
                firstArr.push(".");
                return $('#display').html(firstArr);
            }else{
                secArr.push(".");
                return $('#display').html(secArr);
            };
        });
    
        $('#divide').on('click', function () {
            if(op.length === 1) {
                if(firstArr.indexOf(".") >=0 && secArr.indexOf(".") >= 0) {
                     forDecimalInBoth();
                    var z=operators[op](x,y);
                           reset();
                           firstArr.push(z);
                            op.push("/");
                }else if(firstArr.indexOf(".") >=0 && secArr.indexOf(".") < 0) {
                     forDecimalInFirst();
                    var z=operators[op](x,y);
                            reset();
                            firstArr.push(z);
                            op.push("/");
                }else if(firstArr.indexOf(".") < 0 && secArr.indexOf(".") >= 0) {
                     forDecimalInSec();
                    var z=operators[op](x,y);
                            reset();
                            firstArr.push(z);
                             op.push("/");
                }else{
                answer();
                var z=operators[op](x,y);
                reset();
                firstArr.push(z);
                op.push("/");
                }
            }else{
            op.push("/");
            $('#display').html(firstArr);
            }
        });
    
        $('#x').on('click', function () {
            if(op.length === 1) {
                if(firstArr.indexOf(".") >=0 && secArr.indexOf(".") >= 0) {
                     forDecimalInBoth();
                    var z=operators[op](x,y);
                           reset();
                           firstArr.push(z);
                            op.push("x");
                }else if(firstArr.indexOf(".") >=0 && secArr.indexOf(".") < 0) {
                     forDecimalInFirst();
                    var z=operators[op](x,y);
                            reset();
                            firstArr.push(z);
                            op.push("x");
                }else if(firstArr.indexOf(".") < 0 && secArr.indexOf(".") >= 0) {
                     forDecimalInSec();
                    var z=operators[op](x,y);
                            reset();
                            firstArr.push(z);
                             op.push("x");
                }else{
                answer();
                var z=operators[op](x,y);
                reset();
                firstArr.push(z);
                op.push("x");
                }
            }else{
            op.push("x");
            $('#display').html(firstArr);
            }
        });
    
        $('#subtract').on('click', function() {
            if(op.length === 1) {
                if(firstArr.indexOf(".") >=0 && secArr.indexOf(".") >= 0) {
                     forDecimalInBoth();
                    var z=operators[op](x,y);
                           reset();
                           firstArr.push(z);
                            op.push("-");
                }else if(firstArr.indexOf(".") >=0 && secArr.indexOf(".") < 0) {
                     forDecimalInFirst();
                    var z=operators[op](x,y);
                            reset();
                            firstArr.push(z);
                            op.push("-");
                }else if(firstArr.indexOf(".") < 0 && secArr.indexOf(".") >= 0) {
                     forDecimalInSec();
                    var z=operators[op](x,y);
                            reset();
                            firstArr.push(z);
                             op.push("-");
                }else{
                answer();
                var z=operators[op](x,y);
                reset();
                firstArr.push(z);
                op.push("-");
                }
            }else{
            op.push("-");
            $('#display').html(firstArr);
            }
        });
    
        $('#addition').on('click', function() {
            if(op.length === 1) {
                if(firstArr.indexOf(".") >=0 && secArr.indexOf(".") >= 0) {
                     forDecimalInBoth();
                    var z=operators[op](x,y);
                           reset();
                           firstArr.push(z);
                            op.push("+");
                }else if(firstArr.indexOf(".") >=0 && secArr.indexOf(".") < 0) {
                     forDecimalInFirst();
                    var z=operators[op](x,y);
                            reset();
                            firstArr.push(z);
                            op.push("+");
                }else if(firstArr.indexOf(".") < 0 && secArr.indexOf(".") >= 0) {
                     forDecimalInSec();
                    var z=operators[op](x,y);
                            reset();
                            firstArr.push(z);
                             op.push("+");
                }else{
                answer();
                var z=operators[op](x,y);
                reset();
                firstArr.push(z);
                op.push("+");
                }
            }else{
            op.push("+");
            $('#display').html(firstArr);
            }
        });
    
        $('#equal').on('click', function() {
            if(firstArr.indexOf(".") >=0 && secArr.indexOf(".") >= 0) {
                return forDecimalInBoth();
                       reset();
            }else if(firstArr.indexOf(".") >=0 && secArr.indexOf(".") < 0) {
                return forDecimalInFirst();
                        reset();
            }else if(firstArr.indexOf(".") < 0 && secArr.indexOf(".") >= 0) {
                return forDecimalInSec();
                        reset();
            }else{
            
            answer();
            reset();
            }
        });
            
        
        
});