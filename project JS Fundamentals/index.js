function solve() {
  const title = document.querySelector(".nav-title");
  const main = document.querySelector("main");
  const sectionOne = e(
    "section",
    { className: "card" },
    e("h2", { className: "first-group" }, "Less than 1")
  )
  const firstSection = e("ul", { className: "first" });
  sectionOne.appendChild(firstSection);

  const sectionTwo = e(
    "section",
    { className: "card" },
    e("h2", { className: "second-group" }, "More than 1 & Less than 1.5")
  );
  const secondSection = e("ul", { className: "second" });
  sectionTwo.appendChild(secondSection);

  const sectionThree = e(
    "section",
    { className: "card" },
    e("h2", { className: "third-group" }, "More than 1.5"),
    e("ul", {})
  );
  const thirdSection = e("ul", { className: "second" });
  sectionThree.appendChild(thirdSection);

  const currencyOption = document.querySelectorAll("option");

  Array.from(currencyOption).forEach((btn) => {
    btn.addEventListener("click", createGroup);
  });

  function createGroup(event) {
    if (event.target.textContent === "USD $") {
      title.className = "usd-title";
      title.textContent = "You've chosen USD $";

      removeContent();

      const usdData = [
        { value: "EUR-USD", currency: 1.06969 },
        { value: "USD-EUR", currency: 0.93346 },
        { value: "AUD-USD", currency: 0.7221 },
        { value: "USD-AUD", currency: 1.392091 },
        { value: "USD-BGN", currency: 1.84232 },
        { value: "BGN-USD", currency: 0.547989 },
        { value: "CAD-USD", currency: 0.783439 },
        { value: "USD-CAD", currency: 1.276424 },
      ];
      usdData.sort((a, b) => a.currency - b.currency);

      grouped(usdData);
    } else if (event.target.textContent === "EUR €") {
      title.className = "eur-title";
      title.textContent = "You've chosen EUR €";
      removeContent();

      const eurData = [
        { value: "EUR-USD", currency: 1.06969 },
        { value: "USD-EUR", currency: 0.93346 },
        { value: "AUD-EUR", currency: 0.672199 },
        { value: "EUR-AUD", currency: 1.49736 },
        { value: "EUR-BGN", currency: 1.955336 },
        { value: "BGN-EUR", currency: 0.511421 },
        { value: "CAD-EUR", currency: 0.744866 },
        { value: "EUR-CAD", currency: 1.342524 },
      ];
      eurData.sort((a, b) => a.currency - b.currency);

      grouped(eurData);
    } else if (event.target.textContent === "AUD ₳") {
      title.className = "aud-title";
      title.textContent = "You've chosen AUD ₳";

      removeContent();

      const audData = [
        { value: "AUD-USD", currency: 0.709437 },
        { value: "USD-AUD", currency: 1.409569 },
        { value: "AUD-EUR", currency: 0.672199 },
        { value: "EUR-AUD", currency: 1.49736 },
        { value: "AUD-BGN", currency: 1.314376 },
        { value: "BGN-AUD", currency: 0.760818 },
        { value: "CAD-AUD", currency: 1.108102 },
        { value: "AUD-CAD", currency: 0.902444 },
      ];
      audData.sort((a, b) => a.currency - b.currency);

      grouped(audData);
    } else if (event.target.textContent === "BGN лв") {
      title.className = "bgn-title";
      title.textContent = "You've chosen BGN лв";

      removeContent();

      const bgnData = [
        { value: "BGN-USD", currency: 0.547989 },
        { value: "USD-BGN", currency: 1.84232 },
        { value: "BGN-EUR", currency: 0.511421 },
        { value: "EUR-BGN", currency: 1.955336 },
        { value: "AUD-BGN", currency: 1.314376 },
        { value: "BGN-AUD", currency: 0.760818 },
        { value: "CAD-BGN", currency: 1.456463 },
        { value: "BGN-CAD", currency: 0.686595 },
      ];
      bgnData.sort((a, b) => a.currency - b.currency);

      grouped(bgnData);
    } else if (event.target.textContent === "CAD $") {
      title.className = "cad-title";
      title.textContent = "You've chosen CAD $";

      removeContent();

      const cadData = [
        { value: "CAD-USD", currency: 0.783439 },
        { value: "USD-CAD", currency: 1.276424 },
        { value: "CAD-EUR", currency: 0.744866 },
        { value: "EUR-CAD", currency: 1.342524 },
        { value: "CAD-AUD", currency: 1.108102 },
        { value: "AUD-CAD", currency: 0.902444 },
        { value: "CAD-BGN", currency: 1.456463 },
        { value: "BGN-CAD", currency: 0.686595 },
      ];
      cadData.sort((a, b) => a.currency - b.currency);

      grouped(cadData);
    }
  }

  function grouped(currencyData) {
    let countOne = 0;
    let countTwo = 0;
    let countThree = 0;

    currencyData.forEach((d) => {
      if (d.currency < 1) {
        let data = [];
        data.push({ value: d.value, currency: d.currency });
        data.map((data) => groupOne(data));
        countOne++;
      } else if (d.currency >= 1 && d.currency < 1.5) {
        let data = [];
        data.push({ value: d.value, currency: d.currency });
        data.map((data) => groupTwo(data));
        countTwo++;
      } else {
        let data = [];
        data.push({ value: d.value, currency: d.currency });
        data.map((data) => groupThree(data));
        countThree++;
      }
    });

    main.appendChild(sectionOne);
    main.appendChild(sectionTwo);
    main.appendChild(sectionThree);

    const firstGroupCount = e(
      "p",
      { className: "count-one" },
      `Count: ${countOne}`
    );
    sectionOne.appendChild(firstGroupCount);

    const secondGroupCount = e(
      "p",
      { className: "count-two" },
      `Count: ${countTwo}`
    );
    sectionTwo.appendChild(secondGroupCount);

    const thirdGroupCount = e(
      "p",
      { className: "count-three" },
      `Count: ${countThree}`
    );
    sectionThree.appendChild(thirdGroupCount);
  }

  function groupOne(data) {
    const li = e(
      "li",
      { className: "groupOne" },
      `${data.value} = ${data.currency.toFixed(2)}`
    );
    firstSection.appendChild(li);
  }

  function groupTwo(data) {
    const li = e(
      "li",
      { className: "groupTwo" },
      `${data.value} = ${data.currency.toFixed(2)}`
    );
    secondSection.appendChild(li);
  }

  function groupThree(data) {
    const li = e(
      "li",
      { className: "groupThree" },
      `${data.value} = ${data.currency.toFixed(2)}`
    );
    thirdSection.appendChild(li);
  }

  function removeContent() {
    const first = document.querySelector(".count-one");
    const second = document.querySelector(".count-two");
    const third = document.querySelector(".count-three");

    if (first != null || second != null || third != null) {
      first.remove();
      second.remove();
      third.remove();
    }
    while (firstSection.lastChild) {
      firstSection.removeChild(firstSection.lastChild);
    }

    while (secondSection.firstChild) {
      secondSection.removeChild(secondSection.firstChild);
    }

    while (thirdSection.firstChild) {
      thirdSection.removeChild(thirdSection.firstChild);
    }
  }
  function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
      if (attr.substring(0, 2) == "on") {
        result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
      } else {
        result[attr] = value;
      }
    }

    content = content.reduce(
      (a, c) => a.concat(Array.isArray(c) ? c : [c]),
      []
    );

    content.forEach((e) => {
      if (typeof e == "string" || typeof e == "number") {
        const node = document.createTextNode(e);
        result.appendChild(node);
      } else {
        result.appendChild(e);
      }
    });

    return result;
  }
}
