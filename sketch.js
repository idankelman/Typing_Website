

//======================================================================
//                 Typing Website : the main loop : 
//======================================================================



//const fs = require("fs");

//======================================================================
//                  Variable Declerations : 
//======================================================================
let Buttons = [];
let SettingsButtons = [];
let DetailButtons = [];
let LanguageButtons = [];
let GraphButtons = [];
let UiButtons = [];
let Themes = [];
let HelperButtons = [];

let data;
let data_js;
let data_html;
let data_cpp;
let data_py;


let WpmArr = [];
let EnterTime;
let LeaveTime;
let wpm;


let Fdata;

let Width;
let Height;
let earthquakes;
let B1;

//pallate 1 
/*
let Bg_Color = "#14213d";
let Correct_C = "#ffffff";
let Wrong_C = "#fca311";
let Parent_C = "#6c757d";
let Bg_Graph_C = "#6c757d";
let Bg_Tone_C = "#e5e5e5";
*/

//pallet 2

let Bg_Color = "#242933";
let Correct_C = "#ffffff";
let Wrong_C = "#EB3C51";
let Parent_C = "#768198";
let Bg_Graph_C = "#1D2129";
let Bg_Tone_C = "#1E222B";



//pallate 3 
/*
let Bg_Color = "#264653";
let Correct_C = "#ffffff";
let Wrong_C = "#e9c46a";
let Parent_C = "#2a9d8f";
let Bg_Graph_C = "#e9c46a";
let Bg_Tone_C = "#f4a261";
*/

//pallate 4
/*
let Bg_Color = "#001845";
let Correct_C = "#ffffff";
let Wrong_C = "#ff0054";
let Parent_C = "#9e0059";
let Bg_Graph_C = "#ffbd00";
let Bg_Tone_C = "#ff5400";
*/
//pallet 5

/*
let Bg_Color = "#0d1b2a";
let Correct_C = "#ffffff";
let Wrong_C = "#3a86ff";
let Parent_C = "#778da9";
let Bg_Graph_C = "#415a77";
let Bg_Tone_C = "#1b263b";
*/

//pallate 5 
/*
let Bg_Color = "#ffbc42";
let Correct_C = "#ffffff";
let Wrong_C = "#218380";
let Parent_C = "#8f2d56";
let Bg_Graph_C = "#ffbd00";
let Bg_Tone_C = "#ff5400";
*/

let Font;
let FontSize = 24;
let DefaultFontSize = 12;

let TypeAmount = 2; // the amount of sound files 
let Sound = [];
let audios = [];
let SoundTest;


let markX;
let markY;
let newM_x;
let newM_y;

let markLen = 28;
let LerpMark = true;
let MarkAlpha = 5;
let MaxA = 255;
let MinA = 5;
let MarkSpeed = 0.2;


//indexs that point onto the currently pressed buttons.
let LanguageIndex = -1;
let TimerIndex = 0;


//valuable variables that will be used to try to use the program 

let Fader_Btn;
let FaderCounter = 0;

let TypingBtn_rad;
let Typing_Btn;

let Timer_Btn;
let Timer_Btn_rad;
let Sec = 0;
let LastSec;
let Started = false;
let Stop = false;
let Wait = true;
let Help_Buttons = false;
let TimeAmount = 30;

let GraphBack;
let GraphShape;

let Upper = false;


let Detail_Btn;
let TotalChars = 0;
let CorrectChars = 0;

let currWord = "";
let WrongWord = "";
let currWords = [];
let currInd = 0;
let wordInd = 0;
let ThemeIndex = 1;
let currString = "";
let correctWords = 0;
let LastWord = true;
let progress = [];
let TotalProgress = [];
let amount = 200;

let maxRowChars = 64;
let maxRows = 3;
let Offset = 0;
let secondOffset = 0;
let prevOffset = 0;

let ascii = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let URL = "https://api.npoint.io/49ee2d6338d4a80e36e2";
let URL_js = "https://api.npoint.io/cb58920b800f11675445";
let URL_html = "https://api.npoint.io/eaa3814cc7860a66e0c4";
let URL_cpp = "https://api.npoint.io/5007cb3531bdfb43ac4b";
let URL_py = "https://api.npoint.io/db5e02dea1049ed72340";


//let json = {}; // new  JSON Object
let json = {};
let obj = {
  firstname: "idan",
  secondName: "kelman",
  score: 90
};



//======================================================================
//                  preload+setup Declerations : 
//======================================================================

function preload() {


  LoadSounds();
  getData();
  getDatas();
  //SoundTest = loadSound(GetSounds());


}


function setup() {
  createCanvas(windowWidth, windowHeight);
  Width = width;
  Height = height;
  CreateThemes();
  LoadAssets();
  createScreenSizes();
  CreateButtons();
  setTimer();
  SetLanguage();
  getData();
  getDatas();
  textSize(FontSize);
  textFont(Font);
  //windowResized();
  //preload();


}

function windowResized() {
  deleteButtons();
  resizeCanvas(windowWidth, windowHeight);
  Width = width;
  Height = height;
  createScreenSizes();
  CreateButtons();
  updateTimer();
  updateDetails();
  setTimer(TimerIndex);
  SetLanguage(LanguageIndex);
  Typing_Btn.setTxt(currString);

  //getData();
  //setup();
}

//======================================================================
//                  Loop Declerations : 
//======================================================================


function draw() {
  background(color(Bg_Color));
  ShowButtons(Buttons);
  UpdateButtons(Buttons);
  ShowButtons(HelperButtons);  
  UpdateButtons(HelperButtons);

  if (Help_Buttons) {
    FadeIn(HelperButtons); 
  }
  else
  {
    FadeOut(HelperButtons);
  }

  ShowButtons(SettingsButtons);
  UpdateButtons(SettingsButtons);
  ShowButtons(LanguageButtons);

  UpdateButtons(LanguageButtons);

  ShowButtons(UiButtons);
  UpdateButtons(UiButtons);

  //ShowWords(Typing_Btn);
  if (!Stop) {
    ShowText(Typing_Btn);
    ShowMark();
    ShowTimer(Timer_Btn);

  }
  else {
    CheckHover(GraphButtons, false);
  }


  if (!Started) {
    CheckHover(SettingsButtons, true);
    CheckHover(LanguageButtons);
    FadeOut(SettingsButtons);
    FadeOut(LanguageButtons);
  }
  else {
    FadeIn(SettingsButtons);
    FadeIn(LanguageButtons);
  }

  ShowDetails();
  ShowFader(Fader_Btn);
  CheckHover(UiButtons);
  //FadeButtonIn(Fader_Btn);  




}



//======================================================================
//                  input Declerations : 
//======================================================================


function mousePressed() {
  if (!Started) {
    ExecSetButtons(SettingsButtons);
    ExecLangButtons(LanguageButtons);
  }
  ExecUiButtons(UiButtons);
}


function keyPressed() {
  //this function is called whenever a key is presses, it will check 
  //if the key does something to the current typing , if so then it 
  //will update accordingly and make a sound.

  console.log(keyCode);

  if (keyCode == 223 || keyCode == 192) //under ESC
  {
    ResetTest();
    //audios[0].play();
    return;
  }

  if (keyCode == 27)//Esc for settings 
  {
    NextTheme();
    windowResized();
    return;
  }

  if (keyCode == 17)//Control
  {
    return;
  }

  if (keyCode == 16) //Shift
  {
    return;
  }

  if (keyCode == 9)//TAB
  {
    return;
  }

  if (keyCode == 20)//CapsLock
  {
    Help_Buttons = !Help_Buttons;
    return;
  }


  if (Stop == true)
    return;


  //from this point on , every key that will be presses, will make a sound
  playSounds();

  if (keyCode == 8) {
    CheckBackSpace();
    return;
  }

  if (CheckPressed(keyCode, currString, currInd))
    currInd++;

}

function keyDown() {
  if (keyIsDown(SHIFT))
    Uppper = true;
}

function keyUp() {
  Uppper = false;

}




