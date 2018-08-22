const assertEquals = require('chai').assert.equal;
const censorThis = require("../6kyu/censorThis.js");

describe("censorThis", function() {
  it("It should work for basic tests", function() {

    assertEquals(censorThis("The cat does not like the fire",["cat","fire"]),
                             "The *** does not like the ****")

    assertEquals(censorThis("The cat does not like the therapy",["the","like"]),
                                 "*** cat does not **** *** therapy")

    assertEquals(censorThis("Javascript is the BEST programming language and LOLCODE is the Worst",["worst","best"]),
                                 "Javascript is the **** programming language and LOLCODE is the *****")

    assertEquals(censorThis("A bald eagle is a worthy adversary",["bald","a"]),
                                 "* **** eagle is * worthy adversary")

    assertEquals(censorThis("The MAGIC words are fiz buzz and plaf",[]),
                                 "The MAGIC words are fiz buzz and plaf")

    assertEquals(censorThis("The MAGIC words are fiz buzz and plaf",["fluzz","z","ping","narf","tedd","troz","zort"]),
                                 "The MAGIC words are fiz buzz and plaf")

  })
})
