
     //===========================================================
    //                   class for the buttons:
    //===========================================================


class Button {
    x;
    y;
    AlphaA;
    maxA;
    minRad;
    maxRad;
    circ;
    sqr;
    rect;
    fill;
    lerpAlpha;
    lerpRad;
    lerpSpeed = 0.05;
    Color;
    NewColor;
    ratio1 = 1 / 3;
    ratio2 = 1 / 3;
    Txt;
    WriteTxt;
    TxtColor;
    NewTxtColor;
    TxtSize;
    LerpColor;
    lerpTxtColor;
    Pressed;


    //===========================================================
    //                     Construcor Methods:
    //===========================================================


    constructor(x = Width / 2, y = Height / 2, rad = random(5, 20), Txt = "") {
        this.x = x;
        this.y = y;
        this.maxRad = rad;
        this.minRad = 0;
        this.Color = color(random(255), random(255), random(255));
        this.lerpRad = true;
        this.lerpAlpha = true;
        this.AlphaA = 255;
        this.maxA = 255;
        this.circ = true;
        this.sqr = false;
        this.rect = false;
        this.Txt = Txt;
        this.WriteTxt = false;
        this.TxtColor = color(random(255), random(255), random(255));
        this.TxtSize = FontSize;
        this.NewColor = color(random(255), random(255), random(255));
        this.NewTxtColor = color(random(255), random(255), random(255));
        this.LerpColor = false;
        this.lerpTxtColor = false;
        this.Pressed =false;
    }


    //===========================================================
    //                     Get Methods:
    //===========================================================

    getX() { return this.x; }

    getY() { return this.y; }

    //===========================================================
    //                     Set Methods:
    //===========================================================

    setTxt(Txt, Write = false, Txt_C = this.TxtColor, FSize = FontSize) {
        this.Txt = Txt;
        this.WriteTxt = Write;
        this.TxtColor = Txt_C;
        this.TxtSize = FSize;
    }

    setRect(w, h) {
        //(width to height)
        this.ratio1 = w / this.maxRad;
        this.ratio2 = h / this.maxRad;
        this.rect = true;
        this.circ = false;
        this.sqr = false;
    }

    setSqr(r = this.rad) {
        this.rect = false;
        this.circ = false;
        this.sqr = true;

    }

    //===========================================================
    //                     Show & Update:
    //===========================================================


    Lerp(min, max, rate) {
        let ret = lerp(min, max, rate);
        return ret;
    }

    newTxtColor(C)
    {
        this.NewTxtColor= C;
        this.lerpTxtColor =true;

    }

    newColor(C)
    {
        this.NewColor= C;
        this.LerpColor =true;
    }


    update() {
        if (this.lerpRad)
            this.minRad = this.Lerp(this.minRad, this.maxRad, this.lerpSpeed);

        if (!this.lerpRad)
            this.minRad = this.Lerp(this.minRad, 5, this.lerpSpeed);

        if (this.lerpAlpha)
            this.AlphaA = this.Lerp(this.AlphaA, this.maxA, this.lerpSpeed);

        if (!this.lerpAlpha)
            this.AlphaA = this.Lerp(this.AlphaA, 0, this.lerpSpeed);

        if (this.lerpColor)
            this.Color = lerpColor(this.Color, this.NewColor, this.lerpSpeed);

        if (this.LerpColor)
        { 
            //console.log(this.NewColor);
            //console.log(this.Color);
            this.Color = lerpColor(this.Color, this.NewColor, this.lerpSpeed);
        }

        if (this.lerpTxtColor)
            this.TxtColor = lerpColor(this.TxtColor, this.NewTxtColor, this.lerpSpeed);


    }

    Show() {

        fill(red(this.Color), green(this.Color), blue(this.Color), this.AlphaA);
        //tint(this.AlphaA);
        noStroke();
        alpha(this.AlphaA);
        //tint(0);
        if (this.circ)
            circle(this.x, this.y, this.minRad);

        if (this.sqr)
            square(this.x - this.minRad / 2, this.y - this.minRad / 2, this.minRad);

        if (this.sqr)
            square(this.x - this.minRad / 2, this.y - this.minRad / 2, this.minRad);

        if (this.rect)
            rect(this.x - this.minRad * this.ratio1 / 2, this.y - this.minRad * this.ratio2 / 2, this.minRad * this.ratio1, this.minRad * this.ratio2);

        fill(red(this.TxtColor), green(this.TxtColor), blue(this.TxtColor), this.AlphaA);
        //console.log(this.Txt);
        if (this.Txt === "" || this.WriteTxt == false)
            return;

        //tint(255,this.AlphaA);
        textSize(this.TxtSize);
        text(this.Txt, this.x - textWidth(this.Txt) / 2, this.y + textAscent(this.Txt) / 4);
        textSize(FontSize);
    }


    //===========================================================
    //                     Check Methods:
    //===========================================================

    CheckRect(xpos, ypos) {
        //text((int)(this.x + this.minRad), width / 2, height / 12);
        //text((int)(this.x - this.minRad), width / 2 - 100, height / 12);
        //text((int)(this.y + this.minRad), width / 2, height / 10);
        //text((int)(this.y - this.minRad), width / 2 - 100, height / 10);

        //text(xpos + "v" + ypos, Width / 4, Height / 8);

        if (xpos <= this.x + this.minRad * this.ratio1 / 2 && xpos >= this.x - this.minRad * this.ratio1 / 2)
            if (ypos <= this.y + this.minRad * this.ratio2 / 2 && ypos >= this.y - this.minRad * this.ratio2 / 2)
                return true;
        return false;
    }




    Checker(xpos, ypos) {
        //text(this.x + "." + this.y, width / 2, height / 12);
        if (xpos <= this.x + this.minRad / 2 && xpos >= this.x - this.minRad / 2)
            if (ypos <= this.y + this.minRad / 2 && ypos >= this.y - this.minRad / 2)
                return true;
        return false;
    }


    Check(xpos = mouseX, ypos = mouseY) {

        //console.log(xpos+"/"+ypos);
        if (this.sqr || this.circ)
            return this.Checker(xpos, ypos);
        if (this.rect)
            return this.CheckRect(xpos, ypos);
        return false;


    }



}


