//complete this code
class Rectangle {
	constructor(width,height)
	{
		this._width=width;
		this._height=height;
	}
	get height()
	{
		return this._height;
	}
	get width()
	{
		return this._width;
	}
	getArea()
	{
		return this._height*this._width;
	}
}

class Square extends Rectangle {
	constructor(side)
	{
		super(side);
		this.side=side;
	}
	getPerimeter()
	{
		return 4*this._side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
