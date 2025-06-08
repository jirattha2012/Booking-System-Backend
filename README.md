
// update prisma at 'module prisma.js'
npx prisma generate


// update prisma at module 'schema.prisma'
npx prisma migrate dev --name "comment"     # จะเก็บ log การเปลี่ยนแปลง
||
npx prisma db push     # จะไม่เก็บ log การเปลี่ยนแปลง