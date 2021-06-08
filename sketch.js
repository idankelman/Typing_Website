

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
let GraphButtons = [] ;
let UiButtons=[];

let data;
let data_js;
let data_html;
let data_cpp;
let data_py;


let WpmArr=[];
let EnterTime;
let LeaveTime;
let wpm;


let Fdata;

let Width;
let Height;
let earthquakes;
let B1;
let Bg_Color = "#242933";
let Correct_C = "#ffffff";
let Wrong_C = "#EB3C51";
let Parent_C = "#768198";
let Bg_Graph_C= "#1D2129";
let Bg_Tone_C = "#1E222B";

let Font;
let FontSize = 24;
let DefaultFontSize = 12;

let TypeAmount = 2; // the amount of sound files 
let Sound = [];


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
let TimerIndex= 0;


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
let URL_js="https://api.npoint.io/cb58920b800f11675445";
let URL_html="https://api.npoint.io/eaa3814cc7860a66e0c4";
let URL_cpp="https://api.npoint.io/5007cb3531bdfb43ac4b";
let URL_py ="https://api.npoint.io/db5e02dea1049ed72340";


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

}


function setup() {
  createCanvas(displayWidth, displayHeight);
  Width = width;
  Height = height;
  LoadAssets();
  createScreenSizes();
  CreateButtons();
  setTimer();
  SetLanguage();
  getData();
  getDatas();
  textSize(FontSize);
  textFont(Font);
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
  else{
    CheckHover(GraphButtons,false);
  }
  

  if (!Started)
  {
    CheckHover(SettingsButtons,true);
    CheckHover(LanguageButtons);
    FadeOut(SettingsButtons);
    FadeOut(LanguageButtons);
  }
  else
  {
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
  if(!Started)
  {
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

  if (keyCode == 223) //under ESC
  {
    ResetTest();
    return;
  }

  if (keyCode == 27)//Esc for settings 
  {
    return;
  } 

  if (keyCode == 17)//Control
  {
    return;
  }

  if(keyCode==16) //Shift
  {
    return;
  }

  if(keyCode==9)//TAB
  {
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

function keyDown()
{
  if(keyIsDown(SHIFT))
    Uppper = true;
}

function keyUp()
{
  Uppper=false;

}





