if(window.innerWidth<800){
	alert("Sorry, the game is only supported for PCs and laptops :(");
}

var simpleLevelPlan = `
......................
..#................#..
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`;


class Level{
	constructor(plan){
		this.rows = plan.trim().split("\n").map(c => [...c]);
		this.height = this.rows.length;
		this.width = this.rows[0].length;
		this.startActors = [];

		this.rows = this.rows.map((row,y)=>{
			return row.map((ch,x)=>{
				let type = levelChars[ch];
				if(typeof type == "string"){return type;}
				this.startActors.push(type.create(new Vec(x,y),ch));
				return "empty";
			});
		});
	}
}


class Vec{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
	plus(other){
		return new Vec(this.x + other.x, this.y + other.y);
	}
	times(factor){
		return new Vec(this.x * factor, this.y * factor);
	}
}


class State{
	constructor(level,actors,status){
		this.level = level;
		this.actors = actors;
		this.status = status;
	}
	get Player(){return this.actors.find(a=>a.type == "player");}
	static start(level){return State(level,level.startActors,"Playing");}
}



class Player{
	constructor(pos,speed){
		this.pos = pos;
		this.speed = speed;
	}
	get type(){return "player";}
	static create(pos){return new Player(pos.plus(new Vec(0,-0.5)),new Vec(0,0));}
}
Player.prototype.size = new Vec(0.8,1.5);


class Lava{
	constructor(pos, speed, reset){
		this.pos = pos;
		this.speed = speed;
		this.reset = reset;
	}
	get type(){return "lava";}
	static create(pos ,ch){
		if(ch == "="){return new Lava(pos,new Vec(2,0));}
		if(ch == "|"){return new Lava(pos, new Vec(0,2));}
		if(ch == "v"){return new Lava(pos, new Vec(0,3),pos);}
	}
}
Lava.prototype.size = new Vec(1,1);


class Coin{
	constructor(pos,basePos,wobble){
		this.pos = pos;
		this.basePos = basePos;
		this.wobble = wobble;
	}
	get type(){return "coin";}
	static create(pos){
		let basePos = pos.plus(new Vec(0.2,0.1));
		return new Coin(basePos, basePos, Math.random()*Math.PI*2);
	}
}
Coin.prototype.size = new Vec(0.6,0.6);


const levelChars = {
	"." : "empty",
	"#" : "wall",
	"+" : "lava",
	"@" : Player,
	"o" : Coin,
	"=" : Lava,
	"|" : Lava,
	"v" : Lava
};
