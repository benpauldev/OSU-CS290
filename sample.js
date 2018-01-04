// Your code here.

function deepEqual(x,y)
{
	var propcountx;
	var propcounty;

	if((typeof x == "object" && x != null) && (typeof y == "object" && y != null))
	{
		
		if(Object.keys(x).length != Object.keys(y).length)
		{
			return false;
		}
		for(var prop in x)
		{
			if (! deepEqual(x[prop],y[prop])) 
			{
				return false;
			}
		}
		return true;
	}
	else return (x === y);
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
