# Build-Week-Fitness-Anywhere

### POST - Create Account

create a user with role type of instructor or client

<details>
<summary>https://fittnesslambda.herokuapp.com/api/auth/register</summary>

```JSON
what you need:
{
    "username": "Mario",
    "password": "foobar",
    "role": "instructor OR client"
}

what you get back:
{
    "user_id": 10,
    "username": "Mario",
    "password": "$2a$08$cHlS2uqmuiHGvZcqcnFKNOnWcHJD49nDpINZslFqKaQi8dWMIoclC",
    "role": "instructor OR Client"
}
```

</details>

---

### POST - Login

<details>
<summary>https://fittnesslambda.herokuapp.com/api/auth/login</summary>

```JSON
what you need:
{
    "username": "Foo",
    "password": "1234",
}

what you get back:
{
    "message": "Welcome, Foo",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6IkZvbyIsInJvbGUiOiJpbnN0cnVjdG9yIiwiaWF0IjoxNjI0MzgwNjgzLCJleHAiOjE2MjQ0NjcwODN9.h2YESaVK5ZHT-pYHiutFYnI7HnoYxNm1nIH87sW5iiw",
    "role": "instructor"
}
```

</details>

---

### GET - Get All Classes

<details>
<summary>https://fittnesslambda.herokuapp.com/api/classes</summary>
    
```JSON
Returns ALL classes with associated instructor username and id. Anyone can make this call.

what you get back:

[
{
"instructor": {
"id": 1,
"username": "Foo"
},
"class_id": 2,
"name": "Get Swoll",
"type": "strength training",
"start_time": "1:00pm",
"duration": "50 mins",
"level": "intermediate",
"location": "East Gym",
"attendees": "8",
"max_size": "10"
},
{
"instructor": {
"id": 1,
"username": "Foo"
},
"class_id": 1,
"name": "Pump up the Jam",
"type": "cardio",
"start_time": "8:00am",
"duration": "50 mins",
"level": "beginner",
"location": "East Gym",
"attendees": "12",
"max_size": "20"
}
]

````
</details>

--------------------------------------------------------------------

### GET - Get Class By Id
<details>
<summary>https://fittnesslambda.herokuapp.com/api/classes/:class_id</summary>

```JSON
Returns specific class and associated instructor username and id. Anyone can make this call.

what you get back:
 {
        "instructor": {
            "id": 1,
            "username": "Foo"
        },
        "class_id": 2,
        "name": "Get Swoll",
        "type": "strength training",
        "start_time": "1:00pm",
        "duration": "50 mins",
        "level": "intermediate",
        "location": "East Gym",
        "attendees": "8",
        "max_size": "10"
    },
````

</details>
