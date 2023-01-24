'use strict';
//callin dom
const spanin = document.querySelector('.spanin');
const spanOut = document.querySelector('.spanOut');
const totalBalance = document.querySelector('.totalBalance');
const select = document.querySelector('#idSelect');
const interestspan = document.querySelector('.spanInterest');
const btnTransfer = document.querySelector('#btnTransfer');
const input_transfer_to = document.querySelector('.input_transfer_to');
const input_transfer_amount = document.querySelector('.input_transfer_amount');

const paises = [
  'Azua',
  'Bahoruco',
  'Barahona',
  'Dajabón',
  'Duarte',
  'Seibo',
  'Elias Piña',
  'Espaillat',
  'Hato Mayor',
  'Hermanas Mirabal',
  'Independencia',
  'La Altagracia',
  'La Romana',
  'La Vega',
  'Maria Trinidad Sanchez',
  'Monsenor Nouel',
  'Monte Cristi',
  'Monte Plata',
  'Pedernales',
  'Peravia',
  'Puerto Plata',
  'Samana',
  'San Cristobal',
  'San Jose de Ocoa',
  'San Juan',
  'San Pedro de Macoris',
  'Sanchez Ramirez',
  'Santiago',
  'Santiago Rodriguez',
  'Santo Domingo',
  'Valverde',
  'Distrito Ncional',
];

// paises.forEach((pais, index) => {
//   let html = `
// <option value="${index + 1}">${pais}</option>
// `;
//   select.insertAdjacentHTML('afterbegin', html);
// });

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  balance() {
    return this.movements.reduce((acc, crr) => acc + crr, 0);
  },
  maxBalance() {
    this.movements.reduce((acc, crr) => (acc < crr ? (acc = crr) : acc), 0);
  },
};

//calculating the money in the account
const calculatinMoneyIn = function (movements) {
  const allMoney = movements
    .filter(mov => mov > 0)
    .reduce((acc, crr) => acc + crr, 0);
  spanin.innerHTML = allMoney + '$';
};
// const calculatinMoneyOut = function (movements) {
//   const allMoney = movements
//     .filter(mov => mov < 0)
//     .reduce((acc, crr) => acc + crr, 0);
//   spanOut.innerHTML = allMoney + '$';
// };

// calculatinMoneyOut(account1.movements);
// calculatinMoneyIn(account1.movements);

const accounts = [account1, account2, account3, account4];
//computing userNames

const computingNames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(names => names[0])
      .join('');
  });
};

computingNames(accounts);
console.log(account1);
const dominicanPeso = 54;

const convertCurrency =
  account1.movements
    .filter(mov => mov > 0)
    .map(value => value)
    .reduce((acc, crr) => acc + crr, 0) / dominicanPeso;

console.log(Math.round(convertCurrency) + '$');

// computingNames(accounts);
// console.log(accounts);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(account4.balance(account4));

// const balances = account4.balance;
// const accountOne = balances.call(account1);
// console.log(accountOne);
// //display balance
// const labelBalance = document.querySelector('.label-balance');
// labelBalance.textContent = accountOne;

//maximum

const maximun = parameter =>
  parameter.movements.reduce((acc, crr) => (acc < crr ? (acc = crr) : acc), 0);
console.log(maximun(account1));

// const balance = movements.reduce((arr, curr) => arr + curr, 0);
// console.log(balance);

const divRegister = document.querySelector('.div-register');

const allDeposit = function (movements) {
  movements.forEach(function (value, index) {
    const type = value > 0 ? 'DEPOSIT ' : 'WITHDRAWAL';
    let color =
      value > 0
        ? 'linear-gradient(to top left, #39b385, #9be15d);'
        : 'linear-gradient(to top left, #e52a5a, #ff585f);';

    const html = `  <div class="row border px-4 py-2">
                  <div class="col-6 py-1" style="color:white"> <label class="labeldeposit" style="background-image:${color}; border-radius:10px;">

    ${index + 1} ${type}
    </label>
                  </div>
                  <div class="col-6 ">
  ${value}

                  </div>
    </div>`;

    divRegister.insertAdjacentHTML('afterbegin', html);
  });
};
// // const julia = [3, 5, 2, 12, 7];
// // const kate = [4, 1, 15, 8, 3];
// // const julia1 = [9, 16, 6, 8, 3];
// // const kate1 = [10, 5, 6, 1, 4];

// // const checkDogs = (dogsJulia, dogsKate) => {
// //   console.log(dogsJulia);
// //   const dogsJuliaCopy = dogsJulia;
// //   dogsJuliaCopy.splice(3, 4);
// //   console.log(`Julia's dogs copy:  ${[dogsJuliaCopy]}`);

// //   const juliaKateCorrect = [...dogsJuliaCopy, ...dogsKate];
// //   console.log(juliaKateCorrect);

// //   console.log(dogsJulia);

// //   juliaKateCorrect.filter(m=>m>2).map((value,index)=>{
// //     16*value*2;
// //   }).reduce((acc,crr)=>{

// //     acc+crr,0
// //   })

// //   // juliaKateCorrect.forEach(function (value, index) {
// //   //   if (value > 2) {
// //   //     console.log(
// //   //       `Dog number ${index + 1} is an adult and its ${value} years old`
// //   //     );
// //   //   } else {
// //   //     console.log(
// //   //       `Dog number ${index + 1} is a puppy and its ${value} years old`
// //   //     );
// //   //   }
// //   });
// // };
// // checkDogs(julia, kate);
// // checkDogs(julia1, kate1);

// // // //---first part array methodss--
// // // //slice() to extract sth of an array and it keep being the same;

// // // // const arr = [1, 2, 3, 4, 5];

// // // // // console.log(arr.slice());

// // // // // //splice() different to slice() this one delete de extraction;

// // // // // arr.splice(4);
// // // // // console.log(arr);

// // // // //reverse()

// // // // arr.reverse();
// // // // console.log(arr);
// // // //workking with ForEach
// // const slect = document.querySelector('#selectid');

// // account2.movements.forEach(function (value, index) {
// //   const html = ` <option value="${index}"  id="optionid">${Math.abs(
// //     value
// //   )}</option>`;

// //   slect.insertAdjacentHTML('beforeend', html);
// // });

// // const dollarToRd = 54;
// // const convert = account2.movements.map(move => Math.abs(move) * dollarToRd);

// // console.log(convert);

// //1)
// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];
// let humanAge = [];
// const calHumanAges = dogAges =>
//   dogAges
//     .filter(m => m > 2)
//     .map((value, index) => {
//       16 + value * 2;
//     });
// console.log('*****human ages******');

// console.log(calHumanAges(julia));
// let total;
// const average = para => para.reduce((acc, crr) => acc + crr, 0) / para.length;

// calHumanAges(julia);

// console.log(humanAge);

// console.log(average(julia));
//working with the fian

const firstWithdraw = account1.movements.find(mov => mov < 0);
console.log(firstWithdraw);

const first = {
  name: 'Luis',
};
const second = {
  name: 'Alicia',
};

const allObje = [first, second];

const check = allObje.find(ocj => ocj.name == 'Luis');
console.log(check);

//workin with the loggin

const formLogin = document.querySelector('#formId');
const userId = document.querySelector('#userId');
const pinid = document.querySelector('#pinid');
const label_welcome = document.querySelector('.label_welcome');
const section_container = document.querySelector('.opacity');
const resquest_Loand_input = document.querySelector('.resquest_Loand_input');
const resquest_Loand_button = document.querySelector('.resquest_Loand_button');

// const displayTotal = acc => {
//   acc.balance = acc.movements.reduce((acc, crr) => acc + crr, 0);

//   totalBalance.textContent = `${acc.balance}$`;
// };
const callSumary = acc => {
  const inside = acc.movements
    .filter(mov => mov > 0)
    .reduce((ac, crr) => ac + crr, 0);
  spanin.textContent = inside;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((ac, crr) => ac + crr, 0);
  spanOut.textContent = out;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(DEPOSIT => (DEPOSIT * acc.interestRate) / 100)
    .filter((mov, i, arr) => i >= 1)
    .reduce((ac, crr) => ac + crr, 0);
  interestspan.textContent = interest;

  acc.balance = acc.movements.reduce((acc, crr) => acc + crr, 0);
  totalBalance.textContent = `${acc.balance}$`;
};

//validate the form login
const validateFormLogin = () => {
  if (userId.value == '') {
    alert('USER MUST NOT BE EMPTY');
    return false;
  }
  if (pinid.value == '') {
    alert('PIN MUST NOT BE EMPTY');
    return false;
  } else {
    return true;
  }
};
let currentAcc;

formLogin.addEventListener('submit', e => {
  e.preventDefault();
  if (validateFormLogin()) {
    currentAcc = accounts.find(
      acc => acc.userName == userId.value.toLowerCase()
    );

    if (currentAcc) {
      section_container.style.opacity = '100';
      setTimeout(
        () => {
          allDeposit(currentAcc.movements),
            (label_welcome.innerHTML = `Welcome Sr. ${currentAcc.owner}`);
        },

        3000
      );

      //display total

      callSumary(currentAcc);

      console.log('loading');
      userId.classList.add('hiden');
      pinid.classList.add('hiden');
      label_welcome.classList.toggle('hiden');
    }
  } else {
    console.log('im not working');
  }
});
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  input_transfer_to.value;
  const amount = input_transfer_amount.value;

  const userTransfer = accounts.find(
    user => user.userName == input_transfer_to.value
  );

  if (
    currentAcc !== userTransfer &&
    userTransfer &&
    amount > 0 &&
    currentAcc.balance > amount
  ) {
    userTransfer.movements.push(amount);
    currentAcc.movements.push(-amount);
    console.log();
    totalBalance.textContent = `${currentAcc.balance - amount}$`;
    allDeposit(currentAcc.movements);
  } else {
    console.log('Check the info sth should be wrong!');
  }
});
resquest_Loand_button.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(resquest_Loand_input.value);
  const verify_Movement = currentAcc.movements.some(mov => mov >= amount * 0.1);
  if (verify_Movement) {
    currentAcc.movements.push(amount);
    callSumary(currentAcc);

    console.log(currentAcc.movements);
  }
});
