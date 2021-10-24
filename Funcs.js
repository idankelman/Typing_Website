

//======================================================================
//              this is the functions of the program  : 
//======================================================================


//======================================================================
//                      Load Functions :  
//======================================================================

function LoadAssets() {
    Font = loadFont("font.ttf");

}

function LoadSounds() {

    /*
    for (let i = 0; i < TypeAmount; i++)
        Sound.push(new Audio(`Type${i + 1}.mp3`));
    */
    for (let i = 0; i < TypeAmount; i++)
        Sound.push(loadSound(`Type${i + 1}.mp3`, null, null, Waiter));
    //Sound.push(new Audio(`Type${i + 1}.mp3`));

}


function GetSounds() {

    let storage = firebase.storage().ref('Etc/1.png');
    storage.getDownloadURL().then((url) => {
        console.log(url);
        //let Temp = loadSound(url);
        //Temp.play();
        return url;
    });


}

function Waiter() {
    console.log("waiting");
}

function getData() {


    $.ajax({
        type: "GET",
        url: URL,

        success: function (result) {
            //data = JSON.stringify(result);
            //console.log(result);
            data = result;
            Fdata = data;
            //console.log(data);
            currString = GenerateString(amount, data); // making the string now so that it will be in sync
            Typing_Btn.setTxt(currString);
        },

        error: function () {
            alert("Failed to get the data from the server");
        }
    });


}

function getDatas() {
    $.ajax({
        type: "GET",
        url: URL_js,

        success: function (result) {
            //data = JSON.stringify(result);
            //console.log(result);
            data_js = result;
            //currString = GenerateString(amount, data_js); // making the string now so that it will be in sync
            //Typing_Btn.setTxt(currString);
            //Fdata = data_js;
            //console.log(data);
        },

        error: function () {
            alert("Failed to get the data from the server");
        }
    });


    $.ajax({
        type: "GET",
        url: URL_html,

        success: function (result) {
            //data = JSON.stringify(result);
            //console.log(result);
            data_html = result;
            //console.log(data);
        },

        error: function () {
            alert("Failed to get the data from the server");
        }
    });

    $.ajax({
        type: "GET",
        url: URL_cpp,

        success: function (result) {
            //data = JSON.stringify(result);
            //console.log(result);
            data_cpp = result;
            //console.log(data);
        },

        error: function () {
            alert("Failed to get the data from the server");
        }
    });

    $.ajax({
        type: "GET",
        url: URL_py,

        success: function (result) {
            //data = JSON.stringify(result);
            //console.log(result);
            data_py = result;
            //console.log(data);
        },

        error: function () {
            alert("Failed to get the data from the server");
        }
    });

}

function LoadJson() {
    // Get the most recent earthquake in the database
    //let url =
    //'https://earthquake.usgs.gov/earthquakes/feed/v1.0/' +
    //'summary/all_day.geojson';
    //earthquakes = loadJSON(url);
    //console.log(earthquakes);
    //let Data = loadJSON(URL);
    //console.log(Data);
}


//======================================================================
//                      Create functions :  
//======================================================================

function CreateButtons() {
    Buttons = [];
    DetailButtons = [];
    LanguageButtons = [];
    UiButtons = [];
    //Buttons Start Typing : 
    Typing_Btn = new Button(Width / 2, Height / 2, TypingBtn_rad);
    Typing_Btn.setRect(TypingBtn_rad * 2, TypingBtn_rad);
    Typing_Btn.Color = color(Bg_Color);
    Buttons.push(Typing_Btn);

    Fader_Btn = new Button(Width / 2, Height / 2, TypingBtn_rad);
    Fader_Btn.setRect(Width, Timer_Btn_rad * 2.2);
    Fader_Btn.Color = color(Bg_Color);
    Fader_Btn.lerpRad = true;
    Fader_Btn.lerpAlpha = false;
    Fader_Btn.minRad = Fader_Btn.maxRad;
    //Buttons.push(Fader_Btn);

    let LogoRad = 80;
    let Logo_Btn = new Button(Width / 2 - Width / 8, Height / 10, LogoRad);
    Logo_Btn.setRect(LogoRad * 3, LogoRad);
    Logo_Btn.setTxt("</Code Typer>", true, color(Wrong_C), FontSize * 1.5);
    Logo_Btn.Color = color(Bg_Color);
    Logo_Btn.Pressed = true;
    UiButtons.push(Logo_Btn);


    Timer_Btn = new Button(Width / 2, Height / 3, Timer_Btn_rad);
    Timer_Btn.setSqr();
    Timer_Btn.setTxt("" + TimeAmount - Sec, true, color(Parent_C), FontSize * 10);
    Timer_Btn.Color = color(Bg_Color);
    //Timer_Btn.lerpRad = true;
    //Timer_Btn.lerpAlpha = false;
    //Timer_Btn.minRad =Timer_Btn.maxRad;

    Detail_Btn = new Button(Width / 2, Height / 3, Timer_Btn_rad);
    Detail_Btn.setSqr();
    Detail_Btn.setTxt("", true, color(Wrong_C), FontSize * 1.5);
    Detail_Btn.Color = color(Bg_Color);
    Detail_Btn.lerpRad = true;
    Detail_Btn.lerpAlpha = true;
    Detail_Btn.minRad = Detail_Btn.maxRad;


    let Detail_BtnR = Timer_Btn_rad / 6;
    let Detail_Btn_ValR = Timer_Btn / 4;
    let Dx = Width / 2 - Width / 6;
    let Dy = Height / 2.4;
    let Bx = (Width - (Width / 3 * 2)) / 3;

    let DFont = FontSize * 1.75;
    let VFont = FontSize * 2.5;

    textSize(DFont);
    let DSpacing = textAscent() * 1.5;
    let DxOff = textWidth("'");
    textSize(VFont);
    let ValSpacing = textAscent() + DSpacing * 1.25;


    let Detail_Wpm;
    let Detail_Wpm_Val;

    Detail_Wpm = new Button(Dx - DxOff, Dy, Detail_BtnR);
    Detail_Wpm.setTxt("wpm", true, color(Parent_C), DFont);
    Detail_Wpm.Color = color(Bg_Color);
    Detail_Wpm.AlphaA = 0;

    Detail_Wpm_Val = new Button(Dx, Dy + DSpacing, Detail_Btn_ValR);
    Detail_Wpm_Val.setTxt("151", true, color(Wrong_C), VFont);
    Detail_Wpm_Val.Color = color(Bg_Color);
    Detail_Wpm_Val.AlphaA = 0;

    Dy += ValSpacing;

    let Detail_Acc;
    let Detail_Acc_Val;

    Detail_Acc = new Button(Dx - DxOff, Dy, Detail_BtnR);
    Detail_Acc.setTxt("acc", true, color(Parent_C), DFont);
    Detail_Acc.Color = color(Bg_Color);
    Detail_Acc.AlphaA = 0;

    Detail_Acc_Val = new Button(Dx, Dy + DSpacing, Detail_Btn_ValR);
    Detail_Acc_Val.setTxt("44%", true, color(Wrong_C), VFont);
    Detail_Acc_Val.Color = color(Bg_Color);
    Detail_Acc_Val.AlphaA = 0;

    Dy += ValSpacing;
    Dx += Bx - ValSpacing / 2;
    DFont = DFont / 2;
    VFont = VFont / 2;
    textSize(DFont);
    DSpacing = textAscent() * 1.5;
    DxOff = textWidth("'");
    textSize(VFont);

    let Detail_Raw;
    let Detail_Raw_Val;

    Detail_Raw = new Button(Dx - DxOff, Dy, Detail_BtnR);
    Detail_Raw.setTxt("raw", true, color(Parent_C), DFont);
    Detail_Raw.Color = color(Bg_Color);
    Detail_Raw.AlphaA = 0;

    Detail_Raw_Val = new Button(Dx, Dy + DSpacing, Detail_Btn_ValR);
    Detail_Raw_Val.setTxt("112", true, color(Wrong_C), VFont);
    Detail_Raw_Val.Color = color(Bg_Color);
    Detail_Raw_Val.AlphaA = 0;

    Dx += Bx;

    let Detail_Char;
    let Detail_Char_Val;

    Detail_Char = new Button(Dx - DxOff, Dy, Detail_BtnR);
    Detail_Char.setTxt("characters", true, color(Parent_C), DFont);
    Detail_Char.Color = color(Bg_Color);
    Detail_Char.AlphaA = 0;

    Detail_Char_Val = new Button(Dx, Dy + DSpacing, Detail_Btn_ValR);
    Detail_Char_Val.setTxt("0/0/1/1", true, color(Wrong_C), VFont);
    Detail_Char_Val.Color = color(Bg_Color);
    Detail_Char_Val.AlphaA = 0;

    let Detail_Const;
    let Detail_Const_Val;

    Dx += Bx;

    Detail_Const = new Button(Dx - DxOff, Dy, Detail_BtnR);
    Detail_Const.setTxt("consistency", true, color(Parent_C), DFont);
    Detail_Const.Color = color(Bg_Color);
    Detail_Const.AlphaA = 0;

    Detail_Const_Val = new Button(Dx, Dy + DSpacing, Detail_Btn_ValR);
    Detail_Const_Val.setTxt("100%", true, color(Wrong_C), VFont);
    Detail_Const_Val.Color = color(Bg_Color);
    Detail_Const_Val.AlphaA = 0;


    let Detail_Time;
    let Detail_Time_Val;

    Dx += Bx;

    Detail_Time = new Button(Dx - DxOff, Dy, Detail_BtnR);
    Detail_Time.setTxt("time", true, color(Parent_C), DFont);
    Detail_Time.Color = color(Bg_Color);
    Detail_Time.AlphaA = 0;

    Detail_Time_Val = new Button(Dx, Dy + DSpacing, Detail_Btn_ValR);
    Detail_Time_Val.setTxt("1s", true, color(Wrong_C), VFont);
    Detail_Time_Val.Color = color(Bg_Color);
    Detail_Time_Val.AlphaA = 0;



    DetailButtons.push(Detail_Wpm);
    DetailButtons.push(Detail_Wpm_Val);
    DetailButtons.push(Detail_Acc);
    DetailButtons.push(Detail_Acc_Val);

    DetailButtons.push(Detail_Raw);
    DetailButtons.push(Detail_Raw_Val);
    DetailButtons.push(Detail_Char);
    DetailButtons.push(Detail_Char_Val);
    DetailButtons.push(Detail_Const);
    DetailButtons.push(Detail_Const_Val);
    DetailButtons.push(Detail_Time);
    DetailButtons.push(Detail_Time_Val);

    //FadeOut(DetailButtons);




    //Buttons.push(Detail_Btn);
    //Buttons.push(Timer_Btn);
    //B1 = new Button(Width / 2, Height / 2, 50);
    //Buttons.push(B1);


    //Settings Buttons:

    let SettingBtn_Rad = 40;

    let SetBtn_15;
    let SetBtn_30;
    let SetBtn_60;

    let StartingX = Width / 2 + Width / 10;
    let StartingY = Height / 10;
    let Spacing = textWidth("XX") * 2;


    SetBtn_15 = new Button(StartingX, StartingY, SettingBtn_Rad);
    SetBtn_15.setRect(SettingBtn_Rad, SettingBtn_Rad / 1.85);
    SetBtn_15.setTxt("15", true, color(Parent_C), FontSize / 1.5);
    SetBtn_15.Color = color(Bg_Color);
    SettingsButtons.push(SetBtn_15);

    SetBtn_30 = new Button(StartingX + Spacing, StartingY, SettingBtn_Rad);
    SetBtn_30.setRect(SettingBtn_Rad, SettingBtn_Rad / 1.85);
    SetBtn_30.setTxt("30", true, color(Parent_C), FontSize / 1.5);
    SetBtn_30.Color = color(Bg_Color);
    SettingsButtons.push(SetBtn_30);

    SetBtn_60 = new Button(StartingX + Spacing * 2, StartingY, SettingBtn_Rad);
    SetBtn_60.setRect(SettingBtn_Rad, SettingBtn_Rad / 1.85);
    SetBtn_60.setTxt("60", true, color(Parent_C), FontSize / 1.5);
    SetBtn_60.Color = color(Bg_Color);
    SettingsButtons.push(SetBtn_60);


    let JsButton;
    let HtmlButton;
    let CppButton;
    let EnglishButton;
    let PythonButton;

    StartingY -= Spacing / 2.5;
    StartingX -= Spacing;
    Spacing = Spacing;

    JsButton = new Button(StartingX, StartingY, SettingBtn_Rad);
    JsButton.setRect(SettingBtn_Rad, SettingBtn_Rad / 1.85);
    JsButton.setTxt("js", true, color(Parent_C), FontSize / 1.5);
    JsButton.Color = color(Bg_Color);
    LanguageButtons.push(JsButton);

    HtmlButton = new Button(StartingX + Spacing, StartingY, SettingBtn_Rad);
    HtmlButton.setRect(SettingBtn_Rad, SettingBtn_Rad / 1.85);
    HtmlButton.setTxt("html", true, color(Parent_C), FontSize / 1.5);
    HtmlButton.Color = color(Bg_Color);
    LanguageButtons.push(HtmlButton);

    CppButton = new Button(StartingX + Spacing * 2, StartingY, SettingBtn_Rad);
    CppButton.setRect(SettingBtn_Rad, SettingBtn_Rad / 1.85);
    CppButton.setTxt("cpp", true, color(Parent_C), FontSize / 1.5);
    CppButton.Color = color(Bg_Color);
    LanguageButtons.push(CppButton);

    PythonButton = new Button(StartingX + Spacing * 3, StartingY, SettingBtn_Rad);
    PythonButton.setRect(SettingBtn_Rad, SettingBtn_Rad / 1.85);
    PythonButton.setTxt("py", true, color(Parent_C), FontSize / 1.5);
    PythonButton.Color = color(Bg_Color);
    LanguageButtons.push(PythonButton);

    EnglishButton = new Button(StartingX + Spacing * 4, StartingY, SettingBtn_Rad);
    EnglishButton.setRect(SettingBtn_Rad, SettingBtn_Rad / 1.85);
    EnglishButton.setTxt("english", true, color(Parent_C), FontSize / 1.5);
    EnglishButton.Color = color(Bg_Color);
    LanguageButtons.push(EnglishButton);




}

function createScreenSizes() {
    //i would like to have the position of the text on the top , 
    //such that the Code Type title will be above the written stuff , and 
    //always on the middle .
    TypingBtn_rad = Width / 3.5;
    Timer_Btn_rad = height / 4;
}


function setTimer(ind = TimerIndex) {
    if (SettingsButtons == undefined) {
        SettingsButtons = [];
        return
    }
    //console.log(ind);
    TimerIndex = ind;
    for (let i = 0; i < SettingsButtons.length; i++) {
        if (i == ind) {
            let Amounter = int(SettingsButtons[i].Txt);
            SettingsButtons[i].newTxtColor(color(Wrong_C));
            SettingsButtons[i].Pressed = true;
            TimeAmount = Amounter;
            Timer_Btn.Txt = "" + Amounter;
        }
        else {
            SettingsButtons[i].newTxtColor(color(Parent_C));
            SettingsButtons[i].Pressed = false;
        }
    }


}

function SetLanguage(ind = 4) {
    if (LanguageButtons == undefined) {
        LanguageButtons = [];
        return
    }
    console.log(ind);
    let Changed = true;
    if (LanguageIndex == ind)
        Changed = false;

    LanguageIndex = ind;
    console.log(LanguageButtons);

    for (let i = 0; i < LanguageButtons.length; i++) {
        if (i == ind) {
            if (LanguageButtons[i].Pressed == true)
                Changed = false;
            let Amounter = int(LanguageButtons[i].Txt);
            LanguageButtons[i].newTxtColor(color(Wrong_C));
            LanguageButtons[i].Pressed = true;
        }
        else {
            //if (LanguageButtons[i].Pressed == false)
            LanguageButtons[i].newTxtColor(color(Parent_C));
            LanguageButtons[i].Pressed = false;
        }
    }
    if (ind == 0)
        Fdata = data_js;
    if (ind == 1)
        Fdata = data_html;
    if (ind == 2)
        Fdata = data_cpp;
    if (ind == 3)
        Fdata = data_py;
    if (ind == 4)
        Fdata = data;

    console.log(Changed);


    FadeOutFader();
    FadeButtonOut(Detail_Btn);
    if (Changed) {
        currString = GenerateString(amount, Fdata);
        Typing_Btn.setTxt(currString);
    }


}


function MakeButtons(arr) {

    //checking if the data from the json was retreaved sucssesfuly
    //and i am able to use it for examlpe to generate buttons.
    if (arr == undefined)
        arr = [];
    //console.log(arr);
    let scale = 1;
    //let r = random(0,width);
    let div = 0
    if (arr.length > 0)
        div = width / arr.length;
    let r = 0;
    let r2 = random(0, height);
    for (let i = arr.length - 1; i >= 0; i--) {
        let B2 = new Button(r, r2, scale);
        B2.setTxt(arr[i].word);
        Buttons.push(B2);
        scale *= 1.05;
        r += div;
    }
}

function GenerateString(am = amount, dat = data) {

    // given the data (json) & amount of words that we want to generate , 
    //this function will generate a string seperated by different
    //words such that there cannot be two neigbors with the same word 
    //by the amount included . 

    //console.log(data);
    //currWords = [];
    updateDefault();

    if (dat == undefined)
        return "No Data To Generate From";
    let Str = "";
    let Prev = 0;
    let Ind = 0;


    for (let i = 0; i < am; i++) {
        while (Ind == Prev) {
            Ind = int(random(0, dat.length - 1));
        }
        Prev = Ind;
        //console.log("the ind " + Ind);
        //console.log(data[Ind]);
        let s = dat[Ind].word;
        currWords.push(s);
        Str += s;
        if (i != am)
            Str += " ";
    }
    return Str;

}

function GenerateGraph(arr) {
    if (arr == undefined)
        arr = [];

    GraphButtons = [];


    let BtnRad = 6;
    let GraphW = Width / 3;
    let GraphH = Height / 6;
    let StartX = DetailButtons[4].x;  //2Width- Width*(2/3)
    let StarterX = StartX;
    let StarterY = Height / 2 - GraphH / 2;
    let StartY = 0;
    let Spacing = 0;
    if (arr.length > 1)
        Spacing = GraphW / (arr.length - 1);


    //finding the min and the max in the array.
    let Min = 0;
    let Max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Min > arr[i])
            Min = arr[i]
        if (Max < arr[i])
            Max = arr[i]
    }


    for (let i = 0; i < arr.length; i++) {

        let Mapper = map(arr[i], 0, Max, GraphH, 0);
        //console.log(Mapper);
        StartY = StarterY + Mapper;
        let b = new Button(StartX, StartY, BtnRad);
        b.setTxt(arr[i], false, color("#FFFFFF"), FontSize);
        b.Color = (color(Wrong_C));
        //b.lerpRad=true;
        GraphButtons.push(b);
        StartX += Spacing;
    }


    StartX -= Spacing;
    GraphBack = new Button(StarterX + GraphW / 2, StarterY + GraphH / 2, GraphW);
    GraphBack.setRect(GraphW, GraphH);
    GraphBack.minRad = GraphBack.maxRad;
    GraphBack.Color = color(Bg_Graph_C);
}


function CodeToAscii(code) {
    //convert the keycode to the (the ascii val) to char
    //console.log(String.fromCharCode(code));
    return String.fromCharCode(code);
}


function MakeRowsText(offset = 0) {
    let Txt = [maxRows];
    let last = 0;
    let ind = 0;
    let Prev = 0;
    let Chars = maxRowChars;
    let Str = currString.substring(offset, currString.length);
    for (let i = 0; i < maxRows; i++) {
        Txt[i] = [];
        let j = Prev;
        while (j < Chars && Prev < Str.length) {

            if (Str[j] === " ") {
                for (let k = last; k < j; k++)
                    Txt[i].push(Str[k]);
                Txt[i].push(" ");
                last = j + 1;
                ind++;
            }


            j++;
            Prev = j;
        }
        Chars += maxRowChars;
    }
    if (Offset == 0) //only for the firs time setting offset
        Offset = Txt[0].length;
    secondOffset = Txt[1].length;
    return Txt;


}

function CreatePhysicalTxt() {
    let Txt = [maxRows];
    let last = 0;
    let ind = 0;
    let Prev = 0;
    let Chars = maxRowChars;
    for (let i = 0; i < maxRows; i++) {
        Txt[i] = [];
        let j = Prev;
        while (j < Chars && Prev < currString.length) {
            if (currString[j] === " ") {
                Txt[i].push(currString.substring(last, j));
                last = j + 1;
                ind++;
            }
            j++;
            Prev = j;
        }
        Chars += maxRowChars;
    }
    return Txt;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function deleteButtons() {
    //DeleteArr(Buttons);
    //DeleteArr(SettingsButtons);
    Buttons = [];
    SettingsButtons = [];
    LanguageButtons = [];
    GraphButtons = [];
    UiButtons = [];
    console.log(Buttons + "\n" + SettingsButtons);
    Detail_Btn = undefined;
    Timer_Btn = undefined;
    GraphBack = undefined;
}

function DeleteArr(arr) {
    for (let i = 0; i < arr.length; i++)
        arr.pop();

}

function GenerateGraphShape(arr, rightx, righty, leftx, lefty) {
    fill(Bg_Color);
    noStroke();
    let Max = 0;
    let Avg = 0;
    beginShape();
    curveVertex(leftx, lefty);
    for (let i = 0; i < arr.length; i++) {
        curveVertex(arr[i].x, arr[i].y);
        if (Max < WpmArr[i])
            Max = WpmArr[i];
        Avg += WpmArr[i];
    }
    if (WpmArr.length > 0)
        Avg = Avg / WpmArr.length;

    curveVertex(rightx, righty);
    endShape(CLOSE);

    let Lines = 4;
    let Spacing = GraphBack.minRad * GraphBack.ratio2 / Lines;
    let BothY = lefty;

    let WpmText = Max;
    let Spacer = Max / Lines;


    //Drawing vertical Lines
    textSize(FontSize * 0.75);
    for (let i = 0; i <= Lines; i++, BothY += Spacing, WpmText -= Spacer) {
        strokeWeight(0.2);
        stroke(color(0, 0, 0));
        line(leftx, BothY, rightx, BothY);
        fill(color(Parent_C));
        noStroke();
        text(int(WpmText), leftx - (textWidth(int(WpmText) + "x")), BothY + textAscent("x") / 2);
    }

    let BotY = lefty + GraphBack.minRad * GraphBack.ratio2;
    let BothX = leftx;
    let GraphH = GraphBack.minRad * GraphBack.ratio2;
    Spacing = GraphBack.minRad * GraphBack.ratio1 / Lines;

    let TxtSpacer = TimeAmount / Lines;
    let interval = 0;

    //Drawing Horizontal Lines
    textSize(FontSize * 0.75);
    for (let i = 0; i <= Lines; i++, BothX += Spacing, interval += TxtSpacer) {
        strokeWeight(0.2);
        stroke(color(0, 0, 0));
        line(BothX, lefty, BothX, BotY);
        fill(color(Parent_C));
        noStroke();

        text(interval, BothX - textWidth("x") / 2, BotY + textAscent("X"));
    }

    //Showing Errors / words per minute on the side of the graph
    fill(color(Parent_C));
    noStroke();
    textSize(FontSize * 0.75);
    let Ofsseter = textWidth("xxx X");
    let T1 = "Words per Minute";
    let T2 = "Error";


    push();
    translate(leftx - Ofsseter, BotY - Ofsseter / 2);
    //translate(width/2,height/2);
    rotate(-PI / 2);
    text(T1, 0, 0);
    pop();



    push();
    translate(rightx + Ofsseter / 2, lefty + GraphH / 2 - Ofsseter / 2);
    //translate(width/2,height/2);
    rotate(PI / 2);
    text(T2, 0, 0);
    pop();

}


function ShowGraphLine(arr, leftx, lefty) {
    let Max = 0;
    let Avg = 0;

    for (let i = 0; i < arr.length; i++) {
        curveVertex(arr[i].x, arr[i].y);
        if (Max < WpmArr[i])
            Max = WpmArr[i];
        Avg += WpmArr[i];
    }
    if (WpmArr.length > 0)
        Avg = Avg / WpmArr.length;


    let Rad = 5;
    let InitialX = leftx;
    let TableW = GraphBack.minRad * GraphBack.ratio1;
    let Dots = TableW / (Rad * 2);
    let LinesSpacer = TableW / (Dots);
    let BotY = lefty + GraphBack.minRad * GraphBack.ratio2;
    let AvgLine = map(Avg, 0, Max, BotY, lefty);

    noStroke();
    fill(color(Parent_C));
    for (let i = 0; i <= Dots; i++, InitialX += LinesSpacer) {
        circle(InitialX, AvgLine + textAscent("x") / 2, Rad);
    }

    //this line prints the text on the left size of the table
    //text(int(Avg),InitialX-textWidth(int(Avg)+"x"),AvgLine+ textAscent("x")/2);

    //this line prints the text on the middle size of the table
    textSize(FontSize * 0.75);
    let W = textWidth("/AVG: XXX.XX/");
    let H = textAscent("X") + textWidth("x");
    rect(leftx + TableW / 2 - W / 2, AvgLine - H / 4, W, H, 5);
    fill(Bg_Color);
    let AvgSet = Number(Avg).toFixed(2);
    text("avg: " + AvgSet, leftx + TableW / 2 - W / 2 + textWidth("."), AvgLine + H / 2);
}


function CreateThemes() {
    Themes = [];
    
    let Theme1 = ["#14213d", "#ffffff", "#fca311", "#6c757d", "#6c757d", "#e5e5e5"];
    let Theme2 = ["#242933","#ffffff","#EB3C51","#768198","#1D2129","#1E222B"];
    let Theme3 = ["#264653","#ffffff","#e9c46a","#2a9d8f","#2a9d8f","#f4a261"];
    let Theme4 = ["#001845","#ffffff","#ff0054","#9e0059","#ffbd00","#ff5400"];
    let Theme5 = ["#0d1b2a","#ffffff","#3a86ff","#778da9","#415a77","#1b263b"];
    let Theme6 = ["#ffbc42","#ffffff","#218380","#8f2d56","#ffbd00","#ff5400"];

    Themes.push(Theme1);
    Themes.push(Theme2);
    Themes.push(Theme3);
    Themes.push(Theme4);
    Themes.push(Theme5);
    Themes.push(Theme6);



}




//======================================================================
//                      Show Functions :   
//======================================================================


function ShowButtons(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].Show();
        //ShowText(arr[i]);
    }
}

function ShowText(B) {
    //this function show the words to the screen , each character has its 
    //own color completely . it uses the 'CreatePhysicalTxt function to
    //generate the 2D array that holds the words of each row .
    if (B == undefined)
        B = new Button();
    if (B.Txt === "")
        return;

    let offset = prevOffset;
    if (currInd >= Offset + secondOffset) {
        offset = Offset;
        prevOffset = Offset;
    }
    let Txt = MakeRowsText(offset);

    //if we went down a row then we must update also the offset .
    if (offset == Offset)
        UpdateOffset(secondOffset);

    let ind = 0;
    let startY = B.getY();
    let Spacing = FontSize * 1.25;
    for (let i = 0; i < Txt.length; i++) {
        let startX = B.getX() - (maxRowChars * FontSize) / 3;
        for (let j = 0; j < Txt[i].length; j++) {

            if (ind + prevOffset == currInd && WrongWord.length > 0) {

                fill(color(Wrong_C));
                let T1 = WrongWord;
                text(T1, startX, startY);
                startX += textWidth(T1);
            }

            if (ind + prevOffset >= currInd)
                fill(color(Parent_C));
            //else if (TotalProgress[ind + prevOffset] == false)
            //fill(color(Wrong_C));
            else if (TotalProgress[ind + prevOffset] == true)
                fill(color(Correct_C));


            let T = Txt[i][j];
            text(T, startX, startY);

            if (ind + prevOffset == currInd)
                updateMarkLocation(startX, startY - FontSize);

            startX += textWidth(T) + 1;
            ind++;
        }
        startY += Spacing;
    }

}

function ShowWords(B) {
    //this function show the words to the screen , each word has its own color
    //completely . it uses the 'CreatePhysicalTxt function to generate the 
    //2D array that holds the words of each row .

    if (B == undefined)
        B = new Button();
    if (B.Txt === "")
        return;
    let Txt = CreatePhysicalTxt();
    let startY = B.getY();
    let Spacing = FontSize * 1.5;
    let TotalChars = 0;
    //let TotalWords = 0;
    for (let i = 0; i < Txt.length; i++) {
        let startX = B.getX() / 1.25;
        for (let j = 0; j < Txt[i].length; j++) {

            if (TotalChars >= wordInd)
                fill(color("#768198"));
            else if (CheckOverAllProgress() && true)
                fill(color(Correct_C));
            else
                fill(color(Wrong_C));

            let T = Txt[i][j] + " ";
            text(T, startX, startY);
            if (ind == currInd)
                updateMarkLocation(startX + 1, startY - FontSize / 2);
            startX += textWidth(T) + 1;
            TotalChars++;

        }
        startY += Spacing;
    }

}

function ShowScore(B) {
    if (B == undefined)
        B = new Button();


}


function ShowTimer(B) {
    if (B == undefined)
        B = new Button();
    if (Stop == true)
        return;
    B.Show()
    updateTimer();


}

function ShowFader(B) {
    if (B == undefined)
        B = new Button();

    B.Show();
    B.update();
    FaderCounter += 1;
    if (FaderCounter > 40 && Fader_Btn.lerpAlpha == true)
        FadeButtonIn(Fader_Btn);
}

function FadeOutFader() {
    FadeButtonOut(Fader_Btn);
    FaderCounter = 0;
}

function ShowMark() {
    //this function will show the mark that determines where am i 
    //typing exactly on the currstring . it will go between visable to 
    //invisable back and forth and it will lerp into its position . 
    updateLerpM();
    if (currInd == 0)
        LerpColorM(); //it will only lerp if we havent started typing yet
    else
        MarkAlpha = MaxA;

    let C = color(Wrong_C);
    C.setAlpha(MarkAlpha);
    fill(C);
    strokeWeight(2);
    line(markX, markY, markX, markY + markLen);
    rect(markX, markY, 3, markLen);



}


function playSounds() {
    if (Sound.length == 0)
        return;

    let n = getRandomInt(Sound.length);
    Sound[n].play();
    //console.log("the chosen num"+ n);

}

function ShowDetails() {


    if (DetailButtons == undefined || Detail_Btn == undefined)
        return;

    if (Stop == true) {
        if (Detail_Btn.lerpAlpha == false) {
            for (let i = 0; i < DetailButtons.length; i++)
                DetailButtons[i].AlphaA = 0;
            Detail_Btn.AlphaA = 0;
        }
        FadeOut(DetailButtons);
        FadeButtonOut(Detail_Btn);
        FadeOut(GraphButtons);
        FadeButtonOut(GraphBack);
        //TODO : i need to make a detail screen when the program is 
        //finished , to show all of the stats that i added to 
        //Detailed Btn
    }
    else {
        FadeIn(DetailButtons);
        FadeButtonIn(Detail_Btn);
        FadeIn(GraphButtons);
        FadeButtonIn(GraphBack);
    }
    if (Detail_Btn == undefined)
        return;
    //Detail_Btn.Show();
    //Detail_Btn.update();
    ShowButtons(DetailButtons);
    UpdateButtons(DetailButtons);

    if (GraphBack == undefined)
        return;

    GraphBack.Show();
    GraphBack.update();

    let Showed = false;
    if (Stop) {
        Showed = true;
        let leftx, rightx, BothY;
        rightx = GraphBack.x + GraphBack.minRad / 2;
        leftx = GraphBack.x - GraphBack.minRad / 2;
        BothY = GraphBack.y - GraphBack.minRad * GraphBack.ratio2 / 2;

        GenerateGraphShape(GraphButtons, rightx, BothY, leftx, BothY);
        ShowGraph(GraphButtons);
        ShowButtons(GraphButtons);
        UpdateButtons(GraphButtons);
        ShowGraphLine(GraphButtons, leftx, BothY);
    }

    if (!Showed) {
        ShowButtons(GraphButtons);
        UpdateButtons(GraphButtons);
    }



}

function ShowGraph(arr) {

    if (arr == undefined)
        arr = [];

    for (let i = 0; i < arr.length - 1; i++) {

        stroke(arr[i].Color);
        strokeWeight(1);
        noFill();
        //fill(arr[i].Color);

        //curve()
        if (i < arr.length - 3)
            curve(arr[i].x, arr[i].y, arr[i + 1].x, arr[i + 1].y, arr[i + 2].x, arr[i + 2].y, arr[i + 3].x, arr[i + 3].y);
        if (i < 1 || i == arr.length - 2)
            line(arr[i].x, arr[i].y, arr[i + 1].x, arr[i + 1].y);
    }

}


function FadeOut(arr) {

    for (let i = 0; i < arr.length; i++) {
        arr[i].lerpAlpha = true;
        //ShowText(arr[i]);
    }

}

function FadeIn(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].lerpAlpha = false;
        //ShowText(arr[i]);
    }
}

function FadeButtonIn(B) {
    if (B == undefined)
        B = new Button();

    B.lerpAlpha = false;
}

function FadeButtonOut(B) {
    if (B == undefined)
        B = new Button();

    B.lerpAlpha = true;
}


//======================================================================
//                      Check Functions :  
//======================================================================

function ExecSetButtons(arr) {

    let i = CheckButtons(arr);
    if (i == -1)
        return;//no buttons had been clicked
    setTimer(i);
}

function ExecLangButtons(arr) {
    let i = CheckButtons(arr);
    if (i == -1)
        return;//no buttons had been clicked
    SetLanguage(i);
}

function ExecUiButtons(arr) {
    let i = CheckButtons(arr);
    if (i == -1)
        return;//no buttons had been clicked
    CheckUi(i);
}


function CheckHover(arr, Txt = false) {
    let i = CheckButtons(arr);
    if (i == -1) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j].Pressed == false) {
                if (Txt = true)
                    arr[j].newTxtColor(color(Parent_C));
                else
                    arr[j].newColor(color(Parent_C));
            }
            else {
                if (Txt = true)
                    arr[j].newTxtColor(color(Wrong_C));
                else
                    arr[j].newColor(color(Wrong_C));
            }
        }
        return;
    }
    console.log("Setting new Color");
    if (Txt = false)
        arr[i].newColor(color(255, 255, 255));
    else
        arr[i].newTxtColor(color(255, 255, 255));
    //Change the button color that is being hovered on . 

}


function CheckButtons(arr) {
    for (let i = 0; i < arr.length; i++)
        if (arr[i].Check())
            return i;
    return -1;

}

function CheckOverAllProgress() {
    for (let i = 0; i < progress.length; i++)
        if (progress[i] == false)
            return false;
    return true;
}

function CheckUi(i) {
    console.log(i);
    if (i == 0)//LogoButtons is pressed
        ResetTest();
}


function CheckPressed(key, str, i) {

    //this function will check the current pressed key , if it matches
    //where the string index is at , it will return true. (checking with the)
    //asci code of it (upper or lower) . either way it updates the progress.


    if (Started == false) {
        Started = true;
        LastSec = second();
    }
    TotalChars++;

    if (str == undefined)
        str = "";

    let c = CodeToAscii(key);

    if (WrongWord.length > 0) {
        WrongWord += ((c + "").toLowerCase());
        progress.push(false);
        TotalProgress.push(false);
        return false;
    }

    if (str.charAt(i) == c || str.charAt(i) == ((c + "").toLowerCase())) {
        //if the current typed char indeed matches the string , and it
        //is a space , then we need to call the checkCurrWord().
        if (key == 32) {
            let v = checkCurrWord();
            CorrectChars++;
            //console.log(v);
            return true;
        }
        currWord += c;
        progress.push(true);
        TotalProgress.push(true);
        CorrectChars++;
        return true;
    }
    if (key == 32)
        currWord = "";
    else
        WrongWord += ((c + "").toLowerCase());
    progress.push(false);
    TotalProgress.push(false);
    return false;

}

function CheckWord(arr) {
    // a function that check if your progress so far is true or false, 
    //it will be reset once you make a correct word. assential for the
    //backspace function.

    if (arr == undefined || WrongWord.length > 0)
        return false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == false)
            return false;
    }
    return true;
}

function checkCurrWord() {
    //this ufnction checks if the current typed word matches the current string
    //word , in its intierty . if it does , then it updates all of the 
    //necessary vars

    if (!(WrongWord === "")) {
        WrongWord = "";
        wordInd++;
        currWord = "";
        LastWord = false;
        return false;
    }

    console.log(currWords[wordInd] + "," + currWord);
    if (currWords[wordInd] === currWord || currWords[wordInd] === currWord.toLowerCase()) {
        updateProgress();
        LastWord = true;
        return true;
    }
    currWord = "";
    wordInd++;
    LastWord = false;
    return false;
}


function CheckBackSpace() {
    // you can only backspace up to the last point you were wrong.
    //if you were wrong but then you made a right progress , 
    //then your wrong point is reset.
    //return false means you cannot backspace
    //return true mean you can backspace.


    if (WrongWord.length > 0) {
        //[3.2] case 2: simply deleteing false character
        WrongWord = WrongWord.substring(0, WrongWord.length - 1);
        progress.pop();
        TotalProgress.pop();
        //currInd--;
        return true;

    }


    //[1]if the progress is 0 , then that means that the last word 
    //was correct , and we cannot backspace anymore.
    if (progress.length == 0)
        return false;


    //[2]if the last index of the progress was true , then that means
    //that we are deleting a correct character in , and that is fine.
    //let lastInd = progress.length - 1;
    //if (progress[lastInd] == true) {
    if (WrongWord === "") {
        currWord = currWord.substring(0, currWord.length - 1);
        progress.pop();
        TotalProgress.pop();
        currInd--;
        return true;
    }
    //[3] if we are trying to delete a character which we didnt make right, 
    //we need to check weather we are going back a word or not . 
    // if we are going back a word, we need to update the currword to be 
    //as the last word we got . 
    //otherwise , all we have to do is like [2] .


    //[3.1] case 1 : going back word
    //if (progress.length > currWord.length) {
    if (LastWord == false) {
        currInd--;
        return true;
    }



}

//======================================================================
//                      Update Functions  :  
//======================================================================


function updateMarkLocation(x, y) {
    //console.log(isNaN(markX));

    if (isNaN(markX) && isNaN(markY)) {
        markX = x;
        markY = y;
    }
    newM_x = x;
    newM_y = y;
}

function updateLerpM() {
    markX = lerp(markX, newM_x, 0.4);
    markY = lerp(markY, newM_y, 0.4);
}

function UpdateOffset(x) {
    Offset += x;
}

function LerpColorM() {
    if (LerpMark && MarkAlpha < MaxA - 2)
        MarkAlpha = lerp(MarkAlpha, MaxA, MarkSpeed);
    if (LerpMark && MarkAlpha > MaxA - 2)
        LerpMark = false;
    if (!LerpMark && MarkAlpha > MinA + 2)
        MarkAlpha = lerp(MarkAlpha, MinA, MarkSpeed);
    if (!LerpMark && MarkAlpha < MinA + 2)
        LerpMark = true;
}

function updateProgress() {
    //this function updates all of the varialbes, depending if the
    //current word indeed matched the current string word
    WordLen = currWord.length;
    currWord = "";
    wordInd++;
    progress = [];
    correctWords++;
    LastWord = true;
    TotalProgress.push(true);

    let WpmCalc = 0;
    if (LeaveTime != 0) {
        WpmCalc = (1 / LeaveTime) * 60; //Wpm
        //WpmCalc = (WordLen/LeaveTime)*60; //characters per min
    }
    WpmArr.push(WpmCalc);

    LeaveTime = 0;
}


function UpdateButtons(arr) {
    for (let i = 0; i < arr.length; i++)
        arr[i].update();
}


function updateDefault() {
    currWord = "";
    WrongWord = "";
    LastWord = true;
    currWords = [];
    currInd = 0;
    wordInd = 0;
    currString = "";
    correctWords = 0;
    LastWord = true;
    progress = [];
    TotalProgress = [];
    Offset = 0;
    secondOffset = 0;
    prevOffset = 0;
    Sec = 0;
    LastSec = second();
    Timer_Btn.Txt = "" + TimeAmount - Sec;
    Started = false;
    Wait = true;
    CorrectChars = 0;
    TotalChars = 0;
    Stop = false;
    WpmArr = [];
    EnterTime = 0;
    LeaveTime = 0;
    GraphButtons = [];


}



function updateTimer() {
    if (Started == false)
        return;

    if (TimeAmount - Sec == 0) {
        Stop = true;
        updateDetails();
        if (GraphButtons.length == 0 || GraphButtons[0].lerpAlpha == true)
            GenerateGraph(WpmArr);
        return;
    }

    if (LastSec != second()) {
        if (Wait == true) {
            Wait = false;
            return;
        }
        LastSec = second();
        Sec++;
        Timer_Btn.Txt = "" + (TimeAmount - Sec);
    }
    LeaveTime += deltaTime / 1000;
    EnterTime += deltaTime / 1000;



}

function updateDetails() {

    if (Detail_Btn == undefined)
        return;
    if (!Stop)
        return;

    if (TimeAmount == 0 || TotalChars == 0) {
        Detail_Btn.Txt = "Corrupted Test";
        for (let i = 1; i < DetailButtons.length; i += 2)
            DetailButtons[i] = "Corrupted Test";
        return;
    }
    wpm = int(correctWords / TimeAmount * 60);
    wpm = Number(correctWords / TimeAmount * 60).toFixed(1);
    let consistency = int(EnterTime / TimeAmount * 100);
    let CorrectW = "Correct Words : " + correctWords;
    let Accuracy = Number((CorrectChars / TotalChars * 100).toFixed(1)); // rounds float ;
    let AccuracyInt = (int)(Accuracy);

    DetailButtons[1].Txt = wpm;
    DetailButtons[3].Txt = `${AccuracyInt}%`;

    DetailButtons[5].Txt = TotalChars;
    DetailButtons[7].Txt = `${CorrectChars}/${TotalChars - CorrectChars}/ToDo/`;

    DetailButtons[9].Txt = `${consistency}%`;
    DetailButtons[11].Txt = `${TimeAmount}s`;

    Detail_Btn.Txt = wpm + "" + CorrectW + "" + Accuracy;
}


function ResetTest() {
    FadeOutFader();
    FadeButtonOut(Detail_Btn);
    FadeButtonOut(GraphBack);
    currString = GenerateString(amount, Fdata);
    Typing_Btn.setTxt(currString);
    return;
}


function NextTheme() {
    ThemeIndex++;
    if(ThemeIndex>Themes.length)
        ThemeIndex=0

    Bg_Color = Themes[ThemeIndex][0];
    Correct_C =  Themes[ThemeIndex][1];
    Wrong_C =  Themes[ThemeIndex][2];
    Parent_C =  Themes[ThemeIndex][3];
    Bg_Graph_C =  Themes[ThemeIndex][4];
    Bg_Tone_C =  Themes[ThemeIndex][5];

}

//======================================================================
//  q                   Save functions   :  
//======================================================================



function saveData() {
    //let fs = require('fs'), jsonData = JSON.stringify(obj);
    //fs.writeFile("./Data/test.json", jsonData);

    /* 
     $.getJSON("DB.json", function(json) {
       console.log(json); // this will show the info it in firebug console
   });
   
   */

    /*
   var newBubble = {};
 
   // Create a new JSON position object
   var position = { x: mouseX, y: mouseY };
 
   // Add position to bubble
   newBubble.position = position;
 
   // Add diamater and label to bubble
   newBubble.diameter = random(40, 80);
   newBubble.label = "New label";
 
   // Append the new JSON bubble object to the array
   var bubbleData = json.bubbles;
   bubbleData.push(newBubble);
 
   if (bubbleData.length > 10) {
     bubbleData.splice(0, 1);
   }
 */

    //json.x = B1.x;
    //json.y = B1.y;
    //json.rad = B1.rad;

    // Save new data
    //saveJSONObject(json, "http://idanke.mysoft.jce.ac.il/TypingWebsite/Data/test.json");

    //alert("saved");


}




//======================================================================
//                      debugging Funcitons   :  
//======================================================================

function DeBugData() {
    //updateLerpM();
    //text(CheckButtons(Buttons), Width / 2, Height / 14);
    //if (Buttons.length > 0)
    //text(mouseX + "," + mouseY + "," + Buttons[0].x + "," + Buttons[0].y, Width / 2, Height / 20);
}