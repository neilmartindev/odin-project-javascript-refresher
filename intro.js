const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function() {

    }
}

//dot notation
myObject.property // Value!

//bracket notation
myObject["obnoxious property"] // Function

const variable = 'property'
myObject.variable // Returns undefined because it is looking for an object named variable

myObject[variable] // This is equivalent to myObject['property'] and returns 'Value!'