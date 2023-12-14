import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('/api/users', () => {
        return HttpResponse.json([
            {
                id:1,
                firstName: 'John',
                lastName: 'Cena',
                age: 46,
                dateOfBirth: "23-04-1977",
                userName: 'cenajohn1'
              },
              {
                  id:2,
                  firstName: 'David',
                  lastName: 'Louis',
                  age: 36,
                  dateOfBirth: "23-05-1987",
                  userName: 'iamlouisdavid'
                },
                {
                  id:3,
                  firstName: 'John',
                  lastName: 'Wick',
                  age: 59,
                  dateOfBirth: "02-09-1964",
                  userName: 'myselfcena'
                },
        ])
    }),
    http.post('/api/createuser', async ({request}) => {
        const reqBody = await request.json();
        return HttpResponse.json({
            content: reqBody.content,
            createAt: new Date().toLocaleDateString(),
        });
    })
]