const countrylist = {
    "1inch": "1inch",
    "aave": "Aave",
    "ada": "Cardano",
    "aed": "Emirati Dirham",
    "afn": "Afghan Afghani",
    "agix": "SingularityNET",
    "akt": "Akash Network",
    "algo": "Algorand",
    "all": "Albanian Lek",
    "amd": "Armenian Dram",
    "amp": "Amp",
    "ang": "Dutch Guilder",
    "aoa": "Angolan Kwanza",
    "ape": "ApeCoin",
    "apt": "Aptos",
    "ar": "Arweave",
    "arb": "Arbitrum",
    "ars": "Argentine Peso",
    "atom": "Cosmos",
    "ats": "Austrian Schilling",
    "aud": "Australian Dollar",
    "avax": "Avalanche",
    "awg": "Aruban or Dutch Guilder",
    "axs": "Axie Infinity",
    "azm": "Azerbaijani Manat",
    "azn": "Azerbaijan Manat",
    "bake": "BakeryToken",
    "bam": "Bosnian Convertible Mark",
    "bat": "Basic Attention Token",
    "bbd": "Barbadian or Bajan Dollar",
    "bch": "Bitcoin Cash",
    "bdt": "Bangladeshi Taka",
    "bef": "Belgian Franc",
    "bgn": "Bulgarian Lev",
    "bhd": "Bahraini Dinar",
    "bif": "Burundian Franc",
    "bmd": "Bermudian Dollar",
    "bnb": "Binance Coin",
    "bnd": "Bruneian Dollar",
    "bob": "Bolivian Bolíviano",
    "brl": "Brazilian Real",
    "bsd": "Bahamian Dollar",
    "bsv": "Bitcoin SV",
    "bsw": "Biswap",
    "btc": "Bitcoin",
    "btcb": "Bitcoin BEP2",
    "btg": "Bitcoin Gold",
    "btn": "Bhutanese Ngultrum",
    "btt": "BitTorrent",
    "busd": "Binance USD",
    "bwp": "Botswana Pula",
    "byn": "Belarusian Ruble",
    "byr": "Belarusian Ruble",
    "bzd": "Belizean Dollar",
    "cad": "Canadian Dollar",
    "cake": "PancakeSwap",
    "cdf": "Congolese Franc",
    "celo": "Celo",
    "cfx": "Conflux",
    "chf": "Swiss Franc",
    "chz": "Chiliz",
    "clp": "Chilean Peso",
    "cnh": "Chinese Yuan Renminbi Offshore",
    "cny": "Chinese Yuan Renminbi",
    "comp": "Compound",
    "cop": "Colombian Peso",
    "crc": "Costa Rican Colon",
    "cro": "Crypto.com Chain",
    "crv": "Curve DAO Token",
    "cspr": "Casper",
    "cuc": "Cuban Convertible Peso",
    "cup": "Cuban Peso",
    "cve": "Cape Verdean Escudo",
    "cvx": "Convex Finance",
    "cyp": "Cypriot Pound",
    "czk": "Czech Koruna",
    "dai": "DAI",
    "dash": "Digital Cash",
    "dcr": "Decred",
    "dem": "German Deutsche Mark",
    "dfi": "DfiStarter",
    "djf": "Djiboutian Franc",
    "dkk": "Danish Krone",
    "doge": "Dogecoin",
    "dop": "Dominican Peso",
    "dot": "Polkadot",
    "dydx": "dYdX",
    "dzd": "Algerian Dinar",
    "eek": "Estonian Kroon",
    "egld": "Elrond",
    "egp": "Egyptian Pound",
    "enj": "Enjin Coin",
    "eos": "EOS",
    "ern": "Eritrean Nakfa",
    "esp": "Spanish Peseta",
    "etb": "Ethiopian Birr",
    "etc": "Ethereum Classic",
    "eth": "Ethereum",
    "eur": "Euro",
    "fei": "Fei USD",
    "fil": "Filecoin",
    "fim": "Finnish Markka",
    "fjd": "Fijian Dollar",
    "fkp": "Falkland Island Pound",
    "flow": "Flow",
    "flr": "FLARE",
    "frax": "Frax",
    "frf": "French Franc",
    "ftt": "FarmaTrust",
    "fxs": "Frax Share",
    "gala": "Gala",
    "gbp": "British Pound",
    "gel": "Georgian Lari",
    "ggp": "Guernsey Pound",
    "ghc": "Ghanaian Cedi",
    "ghs": "Ghanaian Cedi",
    "gip": "Gibraltar Pound",
    "gmd": "Gambian Dalasi",
    "gmx": "Goldmaxcoin",
    "gnf": "Guinean Franc",
    "gno": "Gnosis",
    "grd": "Greek Drachma",
    "grt": "The Graph",
    "gt": "GateToken",
    "gtq": "Guatemalan Quetzal",
    "gusd": "Gemini US Dollar",
    "gyd": "Guyanese Dollar",
    "hbar": "Hedera",
    "hkd": "Hong Kong Dollar",
    "hnl": "Honduran Lempira",
    "hnt": "Helium",
    "hot": "Hydro Protocol",
    "hrk": "Croatian Kuna",
    "ht": "Huobi Token",
    "htg": "Haitian Gourde",
    "huf": "Hungarian Forint",
    "icp": "Internet Computer",
    "idr": "Indonesian Rupiah",
    "iep": "Irish Pound",
    "ils": "Israeli Shekel",
    "imp": "Isle of Man Pound",
    "imx": "Immutable X",
    "inj": "Injective",
    "inr": "Indian Rupee",
    "iqd": "Iraqi Dinar",
    "irr": "Iranian Rial",
    "isk": "Icelandic Krona",
    "itl": "Italian Lira",
    "jep": "Jersey Pound",
    "jmd": "Jamaican Dollar",
    "jod": "Jordanian Dinar",
    "jpy": "Japanese Yen",
    "kas": "",
    "kava": "Kava",
    "kcs": "Kucoin",
    "kda": "Kadena",
    "kes": "Kenyan Shilling",
    "kgs": "Kyrgyzstani Som",
    "khr": "Cambodian Riel",
    "klay": "Klaytn",
    "kmf": "Comorian Franc",
    "knc": "Kyber Network Crystals",
    "kpw": "North Korean Won",
    "krw": "South Korean Won",
    "ksm": "Kusama",
    "kwd": "Kuwaiti Dinar",
    "kyd": "Caymanian Dollar",
    "kzt": "Kazakhstani Tenge",
    "lak": "Lao Kip",
    "lbp": "Lebanese Pound",
    "ldo": "Lido DAO Token",
    "leo": "LEOcoin",
    "link": "Chainlink",
    "lkr": "Sri Lankan Rupee",
    "lrc": "Loopring",
    "lrd": "Liberian Dollar",
    "lsl": "Basotho Loti",
    "ltc": "Litecoin",
    "ltl": "Lithuanian Litas",
    "luf": "Luxembourg Franc",
    "luna": "Terra",
    "lunc": "",
    "lvl": "Latvian Lat",
    "lyd": "Libyan Dinar",
    "mad": "Moroccan Dirham",
    "mana": "Mana Coin Decentraland",
    "matic": "Polygon",
    "mbx": "MobieCoin",
    "mdl": "Moldovan Leu",
    "mga": "Malagasy Ariary",
    "mgf": "Malagasy Franc",
    "mina": "Mina",
    "mkd": "Macedonian Denar",
    "mkr": "Maker",
    "mmk": "Burmese Kyat",
    "mnt": "Mongolian Tughrik",
    "mop": "Macau Pataca",
    "mro": "Mauritanian Ouguiya",
    "mru": "Mauritanian Ouguiya",
    "mtl": "Maltese Lira",
    "mur": "Mauritian Rupee",
    "mvr": "Maldivian Rufiyaa",
    "mwk": "Malawian Kwacha",
    "mxn": "Mexican Peso",
    "mxv": "",
    "myr": "Malaysian Ringgit",
    "mzm": "Mozambican Metical",
    "mzn": "Mozambican Metical",
    "nad": "Namibian Dollar",
    "near": "NEAR Protocol",
    "neo": "NEO",
    "nexo": "NEXO",
    "nft": "NFT",
    "ngn": "Nigerian Naira",
    "nio": "Nicaraguan Cordoba",
    "nlg": "Dutch Guilder",
    "nok": "Norwegian Krone",
    "npr": "Nepalese Rupee",
    "nzd": "New Zealand Dollar",
    "okb": "Okex",
    "omr": "Omani Rial",
    "one": "Menlo One",
    "op": "Optimism",
    "ordi": "",
    "pab": "Panamanian Balboa",
    "paxg": "PAX Gold",
    "pen": "Peruvian Sol",
    "pepe": "",
    "pgk": "Papua New Guinean Kina",
    "php": "Philippine Peso",
    "pkr": "Pakistani Rupee",
    "pln": "Polish Zloty",
    "pte": "Portuguese Escudo",
    "pyg": "Paraguayan Guarani",
    "qar": "Qatari Riyal",
    "qnt": "Quant",
    "qtum": "QTUM",
    "rol": "Romanian Leu",
    "ron": "Romanian Leu",
    "rpl": "Rocket Pool",
    "rsd": "Serbian Dinar",
    "rub": "Russian Ruble",
    "rune": "THORChain (ERC20)",
    "rvn": "Ravencoin",
    "rwf": "Rwandan Franc",
    "sand": "The Sandbox",
    "sar": "Saudi Arabian Riyal",
    "sbd": "Solomon Islander Dollar",
    "scr": "Seychellois Rupee",
    "sdd": "Sudanese Dinar",
    "sdg": "Sudanese Pound",
    "sek": "Swedish Krona",
    "sgd": "Singapore Dollar",
    "shib": "Shiba Inu",
    "shp": "Saint Helenian Pound",
    "sit": "Slovenian Tolar",
    "skk": "Slovak Koruna",
    "sle": "Sierra Leonean Leone",
    "sll": "Sierra Leonean Leone",
    "snx": "Synthetix Network",
    "sol": "Solana",
    "sos": "Somali Shilling",
    "spl": "Seborgan Luigino",
    "srd": "Surinamese Dollar",
    "srg": "Surinamese Guilder",
    "std": "Sao Tomean Dobra",
    "stn": "Sao Tomean Dobra",
    "stx": "Stacks",
    "sui": "Sui",
    "svc": "Salvadoran Colon",
    "syp": "Syrian Pound",
    "szl": "Swazi Lilangeni",
    "thb": "Thai Baht",
    "theta": "Theta",
    "tjs": "Tajikistani Somoni",
    "tmm": "Turkmenistani Manat",
    "tmt": "Turkmenistani Manat",
    "tnd": "Tunisian Dinar",
    "ton": "Tokamak Network",
    "top": "Tongan Pa'anga",
    "trl": "",
    "trx": "TRON",
    "try": "Turkish Lira",
    "ttd": "Trinidadian Dollar",
    "tusd": "True USD",
    "tvd": "Tuvaluan Dollar",
    "twd": "Taiwan New Dollar",
    "twt": "Trust Wallet Token",
    "tzs": "Tanzanian Shilling",
    "uah": "Ukrainian Hryvnia",
    "ugx": "Ugandan Shilling",
    "uni": "Uniswap",
    "usd": "US Dollar",
    "usdc": "USDC",
    "usdd": "",
    "usdp": "USDP Stablecoin",
    "usdt": "Tether",
    "uyu": "Uruguayan Peso",
    "uzs": "Uzbekistani Som",
    "val": "Vatican City Lira",
    "veb": "Venezuelan Bolívar",
    "ved": "",
    "vef": "Venezuelan Bolívar",
    "ves": "Venezuelan Bolívar",
    "vet": "Vechain",
    "vnd": "Vietnamese Dong",
    "vuv": "Ni-Vanuatu Vatu",
    "waves": "Waves",
    "wemix": "WEMIX",
    "woo": "WOO Network",
    "wst": "Samoan Tala",
    "xaf": "Central African CFA Franc BEAC",
    "xag": "Silver Ounce",
    "xau": "Gold Ounce",
    "xaut": "Tether Gold",
    "xbt": "",
    "xcd": "East Caribbean Dollar",
    "xch": "Chia",
    "xdc": "XDC Network",
    "xdr": "IMF Special Drawing Rights",
    "xec": "Eternal Coin",
    "xem": "NEM",
    "xlm": "Stellar Lumen",
    "xmr": "Monero",
    "xof": "CFA Franc",
    "xpd": "Palladium Ounce",
    "xpf": "CFP Franc",
    "xpt": "Platinum Ounce",
    "xrp": "Ripple",
    "xtz": "Tezos",
    "yer": "Yemeni Rial",
    "zar": "South African Rand",
    "zec": "ZCash",
    "zil": "Zilliqa",
    "zmk": "Zambian Kwacha",
    "zmw": "Zambian Kwacha",
    "zwd": "Zimbabwean Dollar",
    "zwg": "",
    "zwl": "Zimbabwean Dollar"
}

selectAll = document.querySelectorAll('.select')
for (let countrycode in countrylist) {

    selectAll.forEach(select => {
        option = document.createElement('option')
        countrycode = countrycode.toUpperCase()
        option.innerHTML = countrycode;
        option.value = countrycode
        select.appendChild(option)

    });




}
select1 = document.querySelector('#select1')
select1.addEventListener('change', () => {

    let countrycode = select1.value
    let code = countrycode.substring(0, 2);
    let img1 = document.getElementsByTagName('img')[0];
    img1.src = `https:flagsapi.com/${code}/flat/64.png`
    console.log(select1.value)

})

select2 = document.querySelector('#select2')
select2.addEventListener('change', () => {
    let countrycode = select2.value
    let code = countrycode.substring(0, 2);
    let img2 = document.getElementsByTagName('img')[1];
    img2.src = `https:flagsapi.com/${code}/flat/64.png`
})

button = document.querySelector('button')
input = document.querySelector('input')
button.addEventListener('click', () => {
    let fromcurrencyC = select1.value
    let tocurrencyC = select2.value
    let fromcurrency = select1.value.toLowerCase();
    let tocurrency = select2.value.toLowerCase();

    amount = input.value
    if (isNaN(amount) || amount === "") { 
        alert("Please enter a valid number.");
        return;
    }
    amount=parseFloat(amount)

    async function fetchapi() {
        url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromcurrency}.json`
        
        response = await fetch(url);
        if (!response.ok){
            throw new Error("invalid input")
        }
        
        data = await response.json();
        //  console.log(data)

        //  console.log(data[fromcurrency][tocurrency])

        rate = data[fromcurrency][tocurrency];
        convertedamount = Math.round(rate * amount)
        text = document.querySelector('#text')
        text.innerHTML = `${amount} ${fromcurrencyC} = ${convertedamount} ${tocurrencyC}`;
        
       
    }

    fetchapi();


})
input.addEventListener('keydown', async (event) => {
    if (event.key == 'Enter') {
        let fromcurrencyC = select1.value
        let tocurrencyC = select2.value
        let fromcurrency = select1.value.toLowerCase();
        let tocurrency = select2.value.toLowerCase();

        amount = input.value;
        if (isNaN(amount) || amount === "") { 
            alert("Please enter a valid number.");
            return;
        }
        amount=parseFloat(amount)

        async function fetchapi() {
            url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromcurrency}.json`
            try {
                response = await fetch(url);
                data = await response.json();
                //  console.log(data)

                //  console.log(data[fromcurrency][tocurrency])
                rate = data[fromcurrency][tocurrency];
                convertedamount = Math.round(rate * amount)
                text = document.querySelector('#text')
                text.innerHTML = `${amount} ${fromcurrencyC} = ${convertedamount} ${tocurrencyC}`;
            }
            catch (error) {
                alert("invalid entry")
            }
        }

        fetchapi();
    }


})



