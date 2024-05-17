//1.რიცხვების მასივის გათვალისწინებით, გამოიყენეთ ფილტრი ახალი მასივის შესაქმნელად, რომელიც შეიცავს მხოლოდ ლუწი რიცხვებს.
// let array1 = [1, 2, 4, 5, 7, 8,10]
// let array2 = array1.filter((num)=> num%2 ===0  )
// console.log(array2)

//2.მომხმარებლების გაფილტვრა ასაკის მიხედვით: მომხმარებლის ობიექტების მასივის გათვალისწინებით, თვისებების სახელით და ასაკის მიხედვით,
// გამოიყენეთ ფილტრი 18 წელზე უფროსი ასაკის მომხმარებელთა მასივის შესაქმნელად.
// let array1 = [
//     {
//         'name': 'nika',
//         'age': 24,
//         'job': 'agronomy'
//     },
//     {
//         'name': 'gio',
//         'age': 17,
//         'job': 'footballer'
//     },
//     {
//         'name': 'sandro',
//         'age': 11,
//         'job': 'singer'
//     },
//     {
//         'name': 'sergi',
//         'age': 18,
//         'job': 'programmer'
//     },

// ]
// let array2 = array1.filter( user=> user.age >= 18   )
// console.log(array2)

//3.სტრიქონების გაფილტვრა სიგრძის მიხედვით: სტრიქონების მასივის გათვალისწინებით, გამოიყენეთ ფილტრი მასივის შესაქმნელად, 
//რომელიც შეიცავს მხოლოდ 5 სიმბოლოზე მეტ სტრიქონებს.
// let array1 = ['gio','nika','sandro','daviti','andria','sergi']
// let array2 = array1.filter(word=> word.length > 5 )
// console.log(array2)

//4.გააორმაგეთ რიცხვები: მოცემული რიცხვების მასივისთვის, შექმენით ახალი მასივი, სადაც თითოეული რიცხვი გაორმაგდება.
// let array1 = [10,20,30,40,50]
// let array2 = array1.map(num => num * 2)
// console.log(array2)

//5.მომხმარებლის ობიექტების მასივის გათვალისწინებით, შექმენით მასივი,სადაც მხოლოდ მომხმარებლის სახელებს დააბრუნებს.
// let array1 = [
//     {
//         'name': 'nika',
//         'age': 24,
//         'job': 'agronomy'
//     },
//     {
//         'name': 'gio',
//         'age': 17,
//         'job': 'footballer'
//     },
//     {
//         'name': 'sandro',
//         'age': 11,
//         'job': 'singer'
//     },
//     {
//         'name': 'sergi',
//         'age': 18,
//         'job': 'programmer'
//     },

// ]
// let array2 = array1.map(arr2 => arr2.name)
// console.log(array2)

//6.სტრიქონების მასივის გათვალისწინებით, შევქმნათ ახალი მასივი, სადაც თითოეული სტრიქონი გარდაიქმნება მაღალ რეგისტრში,ანუ დიდ ასოებად..
// let array1 = ['nika','giorgi','beka','tekla','nini']
// let array2 = array1.map(word => word.toUpperCase())
// console.log(array2)



//7.იპოვეთ რიცხვების მასივში ყველა რიცხვის ჯამი.ვიყენებთ მაღალი დონის ფუნქციებს.
// function sum(arr){
//     let sum = 0;
//     arr.forEach((number) =>{
//         sum +=number
//     })
//     return sum
// }
// console.log(sum([1,2,3,4,5]))
//      ან ესეც შეიძლება
// let array1 = [1,2,3,4,5]
// let sum = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
// )
// console.log(sum)

//8.გვაქვს მასივი,სადაც ყრია ადამიანის სახელები,ჩვენი მიზანია შევქმნათ ობიექტი, რომელშიც მითითებული იქნება თუ რამდენჯერ მეორდება
// მასივში თითოეული სახელი. მაგალითად: \{ "გიო": 2, "საბა": 5, "ნიკა": 3 \}
// function countName(names){
//     const nameCount = []
//     names.forEach(name => {
//         if(nameCount[name]){
//             nameCount[name]++
//         }else{
//             nameCount[name] = 1
//         }
//     } )
//     return nameCount
// }
// const array = ['nika','gio','nika','sergi','nika','sergi','nika','sandro','sandro',]
// const name = countName(array)
// console.log(name)


//9.რიცხვების მასივის გათვალისწინებით,დავალაგოთ მასივი ზრდადობით.
// let array1 = [20,15,10,30,100,40]
// let array2 = array1.sort((a,b) => a - b)
// console.log(array2)

//10.რიცხვების მასივის გათვალისწინებით,დავალაგოთ მასივი კლებადობით.
// let array1 = [10,20,15,30,25,100]
// let array2 = array1.sort((a,b)=> b - a )
// console.log(array2)

//11.მომხმარებლების დალაგება სახელების მიხედვით: მომხმარებლის ობიექტების მასივის გათვალისწინებით,დავაბრუნოთ მასივი რომელიც დალაგებული იქნება
// ანბანურად მომხმარებლის სახელის მიხედვით.
// let array1 = ['beka','ana','tekla','sergi','nini','dato']
// let array2 = array1.sort()
// console.log(array2)
//12.სტრიქონების მასივის გათვალისწინებით, დავაბრუნოთ მასივი,რომელშიც იქნება ელემენტები ზრდადობით,სტრიქონების სიგრძის  მიხედვით.

//13.მასივის გათვალისწინებით გამოიყენეთ forEach თითოეული ელემენტის კონსოლში დასაპრინტად.
// let array1 = ['beka','ana','tekla','sergi','nini','dato']
// let array2 = array1.forEach(el => console.log(el))
// console.log(array2)

//14.რიცხვების მასივის გათვალისწინებით, გამოიყენეთ forEach რიცხვების  ჯამის გამოსათვლელად.
// let array1 = [1,2,3,4,5]
// let sum = 0
// let array2 = array1.forEach(num => sum = sum + num)
// console.log(sum)

//15.რიცხვების მასივის გათვალისწინებით, გამოიყენეთ every, რათა შეამოწმოთ არის თუ არა ყველა რიცხვი დადებითი.
//რიცხვების მასივის გათვალისწინებით, გამოიყენეთ some, რათა შეამოწმოთ არის თუ არა ზოგიერთი  რიცხვი დადებითი.
// let array1 = [10,15,-15,-20]
// console.log(array1.every((item)=>{
//     return item > 0
// }))
// console.log(array1.some((num)=> num >0))

//16.იურიდიული ასაკის ყველა მომხმარებელი: მომხმარებლის ობიექტების სიმრავლის გათვალისწინებით,  შეამოწმეთ, არის თუ არა ყველა მომხმარებელი
// 18 წლის ან უფროსი ასაკის.
// let array1 = [
//     {
//         'name': 'nika',
//         'age': 24,
//         'job': 'agronomy'
//     },
//     {
//         'name': 'gio',
//         'age': 17,
//         'job': 'footballer'
//     },
//     {
//         'name': 'sandro',
//         'age': 11,
//         'job': 'singer'
//     },
//     {
//         'name': 'sergi',
//         'age': 18,
//         'job': 'programmer'
//     },

// ]
// const everyAge = array1.every((person)=> person.age >= 18)
// console.log(everyAge)
// function checkAge(arr){
//     // if(arr.age >= 18){
//     //     return 'ყველა მომხმარებელი 18 წლის ზემოთაა'
//     // }else{
//     //     return 'ყველა მომხმარებელი სამწუხაროდ 18 წლის ზემოთ არ არის'
//     // }

// }
// checkAge(array1)

//17.სტრიქონების მასივის გათვალისწინებით, შეამოწმეთ,არის თუ არა ყველა სტრიქონი ცარიელი.
// let array1 = ['gio','','nika']
// function checkArray(arr){
//     if(arr === ''){
//         return 'ყველა ცარიელია'
//     }else{
//         return 'არის შევსებული სტრინგებიც'
//     }
// }
// checkArray(array1)
//18.ზოგიერთი რიცხვი კენტია: რიცხვების მასივის გათვალისწინებით,  შეამოწმეთ არის თუ არა კენტი რიცხვები.
// let array1 = [1,2,3,4,5,6,7,8,9,10]
// let array2 = array1.some((num)=> num % 2===0 )
// console.log(array2, 'არის კენტი რიცხვებიც')
//19.ზოგიერთი მომხმარებელი ასაკობრივ ზღვარს ქვემოთ: მომხმარებლის ობიექტების სიმრავლის გათვალისწინებით, გამოიყენეთ some, 
//რომ შეამოწმოთ არის თუ არა 18 წლამდე ასაკის მომხმარებლები.
// let array1 = [
//     {
//         'name': 'nika',
//         'age': 24,
//         'job': 'agronomy'
//     },
//     {
//         'name': 'gio',
//         'age': 17,
//         'job': 'footballer'
//     },
//     {
//         'name': 'sandro',
//         'age': 11,
//         'job': 'singer'
//     },
//     {
//         'name': 'sergi',
//         'age': 18,
//         'job': 'programmer'
//     },

// ]
// let array2 = array1.some(arrAge=> arrAge.age < 18 )
// console.log(array2,'არიან 18წლამდე მომხმარებლები')


//20.დაწერეთ ფუნქცია სახელწოდებით capitalizeWords, რომელიც იღებს წინადადებას (სტრიქონს) არგუმენტად და აბრუნებს ახალ წინადადებას,
// სადაც თითოეული სიტყვის პირველი ასო დიდია.
// let string = 'me sergi kaliashvili davibade tbilisshi'
// let words = string.split(" ")
// let newWords = words.map((word)=>word[0].toUpperCase() + word.slice(1) )
// console.log(newWords)
//split-ით წვდომა მოვიპოვე თითოეულ სიტყვაზე.

//21.დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს და თვისების სახელს და აბრუნებს ამ თვისების უნიკალური მნიშვნელობების მასივს ყველა ობიექტიდან.



//22.დაწერეთ ფუნქცია, რომელიც იღებს სტრიქონს შეყვანად და აბრუნებს ჭეშმარიტს, თუ ის არის პანგრამა (შეიცავს ანბანის ყველა ასოს ერთხელ მაინც),
// ცრუ სხვა შემთხვევაში.


//23.დაწერეთ ფუნქცია, რომელიც მიიღებს წინადადებას შეყვანად და აბრუნებს უნიკალური სიტყვების მასივს ანბანური თანმიმდევრობით,
// გამოკლებით გავრცელებული ინგლისური სიტყვების, როგორიცაა "the", "a" და "is".


//24.დაწერეთ პროგრამა, რომ ამოიღოთ ყველა ცრუ მნიშვნელობა მასივიდან.
// let array1 = ['sergi', false, 1, 0, null]
// let array2 = array1.filter(Boolean )
// console.log(array2)
//25.დაწერეთ პროგრამა წინადადებაში სიტყვების თანმიმდევრობის შესაბრუნებლად
// function reverseSentence(words){
//     let word = words.split(' ')
//     let reverseWords = word.reverse()
//     return reverseWords
// }
// let words = 'hi i am sergi kaliashvili'
// let reverseWords = reverseSentence(words)
// console.log(reverseWords)