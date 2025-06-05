
// update prisma at module prisma.js 
npx prisma generate


// update prisma at module schema.prisma 
npx prisma migrate dev --name "comment"
||
npx prismad db push