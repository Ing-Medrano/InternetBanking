<body>
    <main>
      <!-- <select name="" id="selectid">
        <option value="0">select</option>
      </select> -->
      <div class="row">
        <div class="col-5">
          <h3>Log in to get started</h3>
        </div>
        <div class="col-2">
          <img src="http://localhost/bankIstApp/img/logo.png" alt="" />
        </div>
        <div class="col-5">
          <div class="col-7 float-end">
            <form action="" id="formId">
              <input
                class="inp-user inp"
                type="text"
                id="userId"
                placeholder="user"
              />
              <input
                class="inp-pin inp"
                type="password"
                id="pinId"
                placeholder="PIN"
              />
              <label for="" class="hiden label_welcome"></label>
              <button type="submit">
                <i class="fa-solid fa-right-long"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      <section class="row">
        <div class="col-10 offset-1">
          <div class="row p-4">
            <h7 class="col-6 currentBalance"
              ><i class="fa-brands fa-cc-visa"></i>
              <i class="fa-brands fa-cc-mastercard"></i>
              <i class="fa-brands fa-cc-paypal"></i>
              <i class="fa-brands fa-cc-apple-pay"></i>
            </h7>
            <label class="float-end label-balance col-4"
              ><b class="totalBalance">$000.000.00</b></label
            >
          </div>

          <section class="movement-section row" disabled>
            <div class="col-6 bg-white div-register">
              <div class="_row">
                <div></div>
              </div>
            </div>
            <div class="col-6">
              <div class="my-2 operation--transfer p-3">
                <h6>Transfer money</h6>
                <input class="inp2" disabled type="text" />
                <input class="inp2 px-2" type="number" />

                <a class="a2" href="">
                  <i class="fa-solid fa-right-long"></i
                ></a>
                <label for="">Transfer to</label>
                <label for="">Amount</label>
              </div>

              <div
                class="my-2 operation--loan p-3"
                style="background-color: rgb(119, 139, 119)"
              >
                <h6>Request loan</h6>
                <input class="inp2" type="text" />
                <a class="a2" href="">
                  <i class="fa-solid fa-right-long"></i
                ></a>
              </div>

              <div class="my-2 operation--close p-3">
                <h6>Close account</h6>
                <input class="inp2" type="text" />
                <input class="inp2" type="text" />
                <a class="a2" href="">
                  <i class="fa-solid fa-right-long"></i
                ></a>
              </div>
            </div>
          </section>
        </div>
        <div class="row mt-4 p-3">
          <label class="col-3 spanin">IN <span class=""> 0000$</span></label>
          <label class="col-3 spanOut">
            <span class="col-3"> 0000$</span></label
          >
          <span class="col-3 spanInterest"
            ><strong>INTEREST:</strong> 0000$</span
          >
        </div>
      </section>
    </main>