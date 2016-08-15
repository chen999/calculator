/**
 * Created by Administrator on 2016/8/11.
 */
var screenObj=document.getElementById('screen');
function inputKey(num){
    if(clearBool){//清屏幕
        screenObj.value='';
        clearBool=false;
    }

    /*方法一*/
//    screenObj.value+=num;//按什么就加到后面先
//    if(screenObj.value.charAt(0)=='0'&&screenObj.value.charAt(1)!='.'){//第一个是0并且第二个不是.，如果按数字就去0显示数字
//        switch (num){
//            case '.':
//                break;//按.就加上去
//            default :
//                screenObj.value=num;//第一个是0按什么就显示什么
//        }
//    }
//    if(screenObj.value.indexOf('.')!=screenObj.value.length-1&&num=='.'){//按.并且屏幕中.首次出现不在最后一位就去掉.
//        //console.log(screenObj.value);
//        screenObj.value=screenObj.value.slice(0,screenObj.value.length-1);
//    }


    /*方法二*/
    if(screenObj.value=='0'&&num!='.'){//显示0，输入数字直接显示数字
        screenObj.value=num;
    }
    else{
        if((screenObj.value.indexOf('.')==-1&&num=='.')||num!='.'){//没有.时输入什么都累加
            screenObj.value+=num;
        }
        //else{}//有.输入.不做任何处理
    }
}

function del(){//去掉屏幕中最后一个数
    screenObj.value=screenObj.value.slice(0,screenObj.value.length-1);
}

function clearFun(){//清空屏幕
    screenObj.value='';
    lastNum=nextNum=sign=null;
    count=0;
}

function sqr(){//将屏幕中的数开根号，并显示在屏幕
    screenObj.value=Math.sqrt(screenObj.value);
    clearBool=true;
}

var lastNum,nextNum,sign,clearBool=false,count= 0,res;//符号前的值、符号后的值、符号、是否清屏、记录符号数量、运算结果
function operatingFun(operate){
    console.log('符号开始',lastNum,sign,nextNum);
    ++count;//累计符号点击次数
    //console.log('符号次数：'+count);
    if(count>1){//连运算
        lastNum=result();
        sign=operate;
        clearBool=true;
    }
    else{
        lastNum=Number(screenObj.value);
        sign=operate;//记录符号
        clearBool=true;//清屏
    }
    console.log('符号结束',lastNum,sign,nextNum);
}

function result(){
    console.log('等于开始',lastNum,sign,nextNum);

    nextNum=Number(screenObj.value);
    switch (sign){//符号运算
        case '+':
            res=lastNum+nextNum;
            break;
        case '-':
            res=lastNum-nextNum;
            break;
        case '*':
            res=lastNum*nextNum;
            break;
        case '/':
            res=lastNum/nextNum;
            break;
        case '%':
            res=lastNum%nextNum;
            break;
    }

    screenObj.value=res;
    console.log('等于结束清空前',lastNum,sign,nextNum);
    lastNum=nextNum=sign=null;
    clearBool=true;
    return res;

}



