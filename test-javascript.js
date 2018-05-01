/*
Form Processing Challenge:  

One of our clients is using a form builder service to gather data from his customers.
Once the form is fullfilled by a customer, the form data is passed to our client web app 
that will process the information comming from the form. 

Our client, expect a shorter data version of what the form service produce
so he can understand the information very easy. 

The information come in two separate arrays: One dedicated to describe the fields
of the form (Array type A) and another dedicated to describe the answer of each field
(Array Type B). 

Our client expect a single array cointaining multiple answer objects with the information 
comming from the arraya type A and B all together.

As a Web Developer, your task is to create a function that reduce this information so it 
can be stored in our client database for him to analize in the future.

Please do not forget to document your code. 

*/

// Array Type A 
const arrayTypeA = [
    {
        "id": "DlXFaesGBpoF",
        "title": "Thanks, {{answer_60906475}}! What's it like where you live? Tell us in a few sentences.",
        "type": "long_text",
        "ref": "[readable_ref_long_text",
        "allow_multiple_selections": false,
        "allow_other_choice": false
    },
    {
        "id": "SMEUb7VJz92Q",
        "title": "If you're OK with our city management following up if they have further questions, please give us your email address.",
        "type": "email",
        "ref": "readable_ref_email",
        "allow_multiple_selections": false,
        "allow_other_choice": false
    },
    {
        "id": "pXyUB2dsHhKd",
        "title": "What is your first name?",
        "type": "short_text",
        "ref": "readable_ref_short_text",
        "allow_multiple_selections": false,
        "allow_other_choice": false
    },
    {
        "id": "KoJxDM3c6x8h",
        "title": "When did you move to the place where you live?",
        "type": "date",
        "ref": "readable_ref_date",
        "allow_multiple_selections": false,
        "allow_other_choice": false
    },
    {
        "id": "PNe8ZKBK8C2Q",
        "title": "Which pictures do you like? You can choose as many as you like.",
        "type": "picture_choice",
        "ref": "readable_ref_picture_choice",
        "allow_multiple_selections": true,
        "allow_other_choice": false
    },
    {
        "id": "Q7M2XAwY04dW",
        "title": "On a scale of 1 to 5, what rating would you give the weather in Sydney? 1 is poor weather, 5 is excellent weather",
        "type": "number",
        "ref": "readable_ref_number1",
        "allow_multiple_selections": false,
        "allow_other_choice": false
    },
    {
        "id": "gFFf3xAkJKsr",
        "title": "By submitting this form, you understand and accept that we will share your answers with city management. Your answers will be anonymous will not be shared.",
        "type": "legal",
        "ref": "readable_ref_legal",
        "allow_multiple_selections": false,
        "allow_other_choice": false
    },
    {
        "id": "k6TP9oLGgHjl",
        "title": "Which of these cities is your favorite?",
        "type": "multiple_choice",
        "ref": "readable_ref_multiple_choice",
        "allow_multiple_selections": false,
        "allow_other_choice": false
    },
    {
        "id": "RUqkXSeXBXSd",
        "title": "Do you have a favorite city we haven't listed?",
        "type": "yes_no",
        "ref": "readable_ref_yes_no",
        "allow_multiple_selections": false,
        "allow_other_choice": false
    },
    {
        "id": "NRsxU591jIW9",
        "title": "How important is the weather to your opinion about a city? 1 is not important, 5 is very important.",
        "type": "opinion_scale",
        "ref": "readable_ref_opinion_scale",
        "allow_multiple_selections": false,
        "allow_other_choice": false
    },
    {
        "id": "WOTdC00F8A3h",
        "title": "How would you rate the weather where you currently live? 1 is poor weather, 5 is excellent weather.",
        "type": "rating",
        "ref": "readable_ref_rating",
        "allow_multiple_selections": false,
        "allow_other_choice": false
    },
    {
        "id": "pn48RmPazVdM",
        "title": "On a scale of 1 to 5, what rating would you give the general quality of life in Sydney? 1 is poor, 5 is excellent",
        "type": "number",
        "ref": "readable_ref_number2",
        "allow_multiple_selections": false,
        "allow_other_choice": false
    }
];



// Array Type B
const arrayTypeB = [
    {
        "type": "text",
        "text": "It's cold right now! I live in an older medium-sized city with a university. Geographically, the area is hilly.",
        "field": {
            "id": "DlXFaesGBpoF",
            "type": "long_text"
        }
    },
    {
        "type": "email",
        "email": "laura@example.com",
        "field": {
            "id": "SMEUb7VJz92Q",
            "type": "email"
        }
    },
    {
        "type": "text",
        "text": "Laura",
        "field": {
            "id": "pXyUB2dsHhKd",
            "type": "short_text"
        }
    },
    {
        "type": "date",
        "date": "2005-10-15",
        "field": {
            "id": "KoJxDM3c6x8h",
            "type": "date"
        }
    },
    {
        "type": "choices",
        "choices": {
            "labels": [
                "London",
                "Sydney"
            ]
        },
        "field": {
            "id": "PNe8ZKBK8C2Q",
            "type": "picture_choice"
        }
    },
    {
        "type": "number",
        "number": 5,
        "field": {
            "id": "Q7M2XAwY04dW",
            "type": "number"
        }
    },
    {
        "type": "boolean",
        "boolean": true,
        "field": {
            "id": "gFFf3xAkJKsr",
            "type": "legal"
        }
    },
    {
        "type": "choice",
        "choice": {
            "label": "London"
        },
        "field": {
            "id": "k6TP9oLGgHjl",
            "type": "multiple_choice"
        }
    },
    {
        "type": "boolean",
        "boolean": false,
        "field": {
            "id": "RUqkXSeXBXSd",
            "type": "yes_no"
        }
    },
    {
        "type": "number",
        "number": 2,
        "field": {
            "id": "NRsxU591jIW9",
            "type": "opinion_scale"
        }
    },
    {
        "type": "number",
        "number": 3,
        "field": {
            "id": "WOTdC00F8A3h",
            "type": "rating"
        }
    },
    {
        "type": "number",
        "number": 4,
        "field": {
            "id": "pn48RmPazVdM",
            "type": "number"
        }
    }
];


/* outputObject Structure

const outputObject = {
    id: '',     // The id of a field in the form
    title: ' ', // The Title of the Field
    type: '',   // The value type of the field: Text, Number etc
    ans: ''     // The answer of the field.
}*/

    //I create a string type variable to convert it to the new outputObjectFixed object when we need it.
    var outputObject = '[';

    //The instruction for ... in iterated over the properties of the object: arrayTypeB.
    for (const indexArrayB in arrayTypeB) {

        //I create an iterator to verify the response index of what will be the new outputObjectFixed object.
        ite = 1;

        //The instruction for ... in iterated over the properties of the object: arrayTypeB [indexArrayB].
        for (const propArrayB in arrayTypeB[indexArrayB]) {

            //I verify the response rate.
            if(ite == 2){

                //I verify that arrayTypeB [indexArrayB] [propArrayB] is an object.
                if(typeof arrayTypeB[indexArrayB][propArrayB] == 'object') {

                    //If it is an object, we add a response to the string that will be the new outputObjectFixed.
                    outputObject += '{ "ans": "",';

                }
                else{

                    //If it is not an object, we add an empty response to the string that will be the new outputObjectFixed.
                    outputObject += '{ "ans": "' + arrayTypeB[indexArrayB][propArrayB] + '",';

                }
            }

            //If the index is different from a response and is equal to an object,
            else if (typeof arrayTypeB[indexArrayB][propArrayB] == 'object') {

                      //I add to the string that will be the new outputObjectFixed the properties: id, type and title.
                      outputObject += ' "id": "' + arrayTypeB[indexArrayB][propArrayB]['id'] + '",';
                      outputObject += ' "type": "' + arrayTypeB[indexArrayB][propArrayB]['type'] + '",';
                      outputObject += ' "title": "' + arrayTypeA[indexArrayB]['title'] + '"},';
            }

        //I incremented the index iterator of what will be the new outputObjectFixed object.
        ite++;

        }
    }

//I close what will be the new outputObjectFixed object.
outputObject += '];';

//I convert the outputObject string to an outputObjectFixed object.
outputObjectFixed = eval(outputObject);

//The instruction for ... in iterated over the properties of the object: outputObjectFixed.
for (const indexOutputObject in outputObjectFixed)

    //The instruction for ... in iterated over the properties of the object: outputObjectFixed [indexOutputObject].
    for (const propOutputObject in outputObjectFixed[indexOutputObject])

    //I print in the console the multiple objects of response with the information coming from the arrayTypeA and arrayTypeB objects.
    console.log(propOutputObject + '=' +outputObjectFixed[indexOutputObject][propOutputObject]);

