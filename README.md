# Build-Week-Fitness-Anywhere

### POST - Create Account

create a user with role type of renter or owner

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
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6IkZvbyIsInJvbGUiOiJpbnN0cnVjdG9yIiwiaWF0IjoxNjI0MzgwNjgzLCJleHAiOjE2MjQ0NjcwODN9.h2YESaVK5ZHT-pYHiutFYnI7HnoYxNm1nIH87sW5iiw"
}
```

</details>

---
