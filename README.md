psibeta
=======

Website for the Psi Beta chapter of the national Theta Tau fraternity.

If you're reading this, you've probably been elected Webmaster! Congratulations!
Webmaster is a great position, and requires only a little bit of work in the beginning or end of the semester.

Most of the website has been created using JSON so alot of it is just tedious copy pasting. Make sure you double check your commas though, JSON is a bit finicky and will crash if you misplace anything!


Tips:
For ACTIVES:
Please make sure to double check a master list with the scribe! This will be the most intensive page, and all officers/previous semester's officers will need to be adjusted accordingly, as well as moving alumni off the Actives page and adding the JI's.

I would have a secondary list (or screen) with all the new JI's names, majors, numbers, and pledge names.

Go through the list and for the previous semester's officers, add a letter to their officer title.

Have a list of the new officers and add letters to the offcer names.

The template for the ACTIVES.json is as follows:
		{
            "img": "353.jpg",
            "name": "Bryan Boucher",
            "pin": "353",
            "pledge_name": "Toofbrush",
            "pledge_class": "Chi Beta F'12",
            "major": "Electrical",
            "officer_letters": "TT! ZZ!"
        },



For ALUMNI:
For the most part, all you really need to do is move the members from the actives tab to the alumni tab. The template is also literally the same.



For OFFICERS:
For the most part, officers is also the same. Might help to have a seperate list to refer to for the new semester's officer's names, pins, pledge names, pledge classes, majors, and emails.

Template for Officer Position is as follows:
		{
            "img": "488.jpg",
            "name": "Kirtana Moorthy",
            "pin": "488",
            "pledge_name": "Lumbergh",
            "pledge_class": "Theta Gamma F'16",
            "major": "Electrical",
            "officer_letters": "U!",
            "email": "kirtana.moorthy@utexas.edu",
            "position": "Outer Guard"
        },

The officer letters are as follows:
Regent: X!
Vice Regent: Y!
Scribe: V!
Treasurer: Z!
Pledge Marshal: W!
Corresponding Secretary: R!
Outer Guard: U!
Inner Guard: T!
Webmaster: 0xDEADBEEF (This one can change, just make sure it's hex so A-F letters only)

For RUSH:
Make sure to talk to the rush chairs and have this up IMMEDIATELY. This is the most important thing you should do and make sure you do this before everything else.

Template for Rush is as follows: 
		{
            "type": "Info Session #1",
            "date": "8/31",
            "time": "5:00 PM",
            "location": "RLM 7.116",
            "gmaps": "https://goo.gl/maps/JNQn2Y1KTuM2"
        },

The google maps for each event does need to be updated if the events are in different locations. You can always move around events that'll be pretty common.

