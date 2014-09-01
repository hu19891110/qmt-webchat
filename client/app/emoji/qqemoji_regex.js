function QQEmojiRegExp(content) {

    var re = /\/::\)|\/::~|\/::B|\/::\||\/:8-\)|\/::<|\/::\$|\/::X|\/::Z|\/::'\(|\/::-\||\/::@|\/::P|\/::D|\/::O|\/::\(|\/::\+|\/:--b|\/::Q|\/::T|\/:,@P|\/:,@-D|\/::d|\/:,@o|\/::g|\/:\|-\)|\/::!|\/::L|\/::>|\/::,@|\/:,@f|\/::-S|\/:\?|\/:,@x|\/:,@@|\/::8|\/:,@!|\/:!!!|\/:xx|\/:bye|\/:wipe|\/:dig|\/:handclap|\/:&-\(|\/:B-\)|\/:<@|\/:@>|\/::-O|\/:>-\||\/:P-\(|\/::'\||\/:X-\)|\/::\*|\/:@x|\/:8\*|\/:pd|\/:<W>|\/:beer|\/:basketb|\/:oo|\/:coffee|\/:eat|\/:pig|\/:rose|\/:fade|\/:showlove|\/:heart|\/:break|\/:cake|\/:li|\/:bome|\/:kn|\/:footb|\/:ladybug|\/:shit|\/:moon|\/:sun|\/:gift|\/:hug|\/:strong|\/:weak|\/:share|\/:v|\/:@\)|\/:jj|\/:@@|\/:bad|\/:lvu|\/:no|\/:ok|\/:love|\/:<L>|\/:jump|\/:shake|\/:<O>|\/:circle|\/:kotow|\/:turn|\/:skip|\/:oY|\/:#-0|\/:hiphot|\/:kiss|\/:<&|\/:&>/ig;
    return content.match(re);
}

function parse_content(content) {
    var match_emoji = QQEmojiRegExp(content);
    console.log("list:" + match_emoji);
    if (match_emoji == null) {
        return content
    }
    ;
    for (var i = 0; i < match_emoji.length; i++) {
        content = content.replace(match_emoji[i], "<span class='qqemoji qqemoj" + qqemoji_map[match_emoji[i]] + "'></span>");
    }
    return content;
}

qqemoji_map = {"/::)": "0",
    "/::~": "1",
    "/::B": "2",
    "/::|": "3",
    "/:8-)": "4",
    "/::<": "5",
    "/::$": "6",
    "/::X": "7",
    "/::Z": "8",
    "/::'(": "9",
    "/::-|": "10",
    "/::@": "11",
    "/::P": "12",
    "/::D": "13",
    "/::O": "14",
    "/::(": "15",
    "/::+": "16",
    "/:--b": "17",
    "/::Q": "18",
    "/::T": "19",
    "/:,@P": "20",
    "/:,@-D": "21",
    "/::d": "22",
    "/:,@o": "23",
    "/::g": "24",
    "/:|-)": "25",
    "/::!": "26",
    "/::L": "27",
    "/::>": "28",
    "/::,@": "29",
    "/:,@f": "30",
    "/::-S": "31",
    "/:?": "32",
    "/:,@x": "33",
    "/:,@@": "34",
    "/::8": "35",
    "/:,@!": "36",
    "/:!!!": "37",
    "/:xx": "38",
    "/:bye": "39",
    "/:wipe": "40",
    "/:dig": "41",
    "/:handclap": "42",
    "/:&-(": "43",
    "/:B-)": "44",
    "/:<@": "45",
    "/:@>": "46",
    "/::-O": "47",
    "/:>-|": "48",
    "/:P-(": "49",
    "/::'|": "50",
    "/:X-)": "51",
    "/::*": "52",
    "/:@x": "53",
    "/:8*": "54",
    "/:pd": "55",
    "/:<W>": "56",
    "/:beer": "57",
    "/:basketb": "58",
    "/:oo": "59",
    "/:coffee": "60",
    "/:eat": "61",
    "/:pig": "62",
    "/:rose": "63",
    "/:fade": "64",
    "/:showlove": "65",
    "/:heart": "66",
    "/:break": "67",
    "/:cake": "68",
    "/:li": "69",
    "/:bome": "70",
    "/:kn": "71",
    "/:footb": "72",
    "/:ladybug": "73",
    "/:shit": "74",
    "/:moon": "75",
    "/:sun": "76",
    "/:gift": "77",
    "/:hug": "78",
    "/:strong": "79",
    "/:weak": "80",
    "/:share": "81",
    "/:v": "82",
    "/:@)": "83",
    "/:jj": "84",
    "/:@@": "85",
    "/:bad": "86",
    "/:lvu": "87",
    "/:no": "88",
    "/:ok": "89",
    "/:love": "90",
    "/:<L>": "91",
    "/:jump": "92",
    "/:shake": "93",
    "/:<O>": "94",
    "/:circle": "95",
    "/:kotow": "96",
    "/:turn": "97",
    "/:skip": "98",
    "/:oY": "99",
    "/:#-": "100",
    "/:hiphot": "101",
    "/:kiss": "102",
    "/:<&": "103",
    "/:&>": "104" };

