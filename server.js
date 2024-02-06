const express = require('express') // Brings express into app
const app = express() // Holds express in a variable
const cors = require('cors')
const PORT = 8000 // Variable containing port, can be any number

app.use(express.static(__dirname + '/public'))
app.use(cors())

const optionsone = require('./navigation/options1.json')
const optionstwo = require('./navigation/options2_1.json')

// Object that we will respond to the client with 
let constructs = { 
    'lotus': {
        'name': 'Lucia',
        'title': 'Lotus',
        'rank': 'B',
        'class': 'Attacker', 
        'element': '80% Physical / 20% Fire',
        'weapon': 'Katana',
        'signature': 'Lotus Berserker',
        'faction': 'Gray Raven',
        'gift': 'Frog Accessory',
        'serviceTime': '6 years',
        'mentalAge': '17',
        'activationDate': '15 Jun',
        'height': '165 cm',
        'weight': '48 kg',
        'vitalFluidType': 'A'
    },
    'eclipse':{
        'name': 'Liv',
        'title': 'Eclipse',
        'rank': 'B',
        'class': 'Support', 
        'element': '100% Physical',
        'weapon': 'Levi-Gun',
        'signature': 'Type-Zero',
        'faction': 'Gray Raven',
        'gift': 'Biosphere',
        'serviceTime': '2 years',
        'mentalAge': '16',
        'activationDate': '10 Aug',
        'height': '155 cm',
        'weight': '43 kg',
        'vitalFluidType': 'O'
    },
    'storm':{
        'name': 'Nanami',
        'title': 'Storm',
        'rank': 'B',
        'class': 'Tank', 
        'element': '100% Physical',
        'weapon': 'Saw',
        'signature': 'Inverse - Chimera',
        'faction': 'Unidentified',
        'gift': 'Jack-in.',
        'serviceTime': 'Unknown',
        'mentalAge': 'Unknown',
        'activationDate': 'Unknown',
        'height': '145 cm',
        'weight': '45 kg',
        'vitalFluidType': 'Unknown'
    },
    'dawn':{
        'name': 'Lucia',
        'title': 'Dawn',
        'rank': 'A',
        'class': 'Attacker', 
        'element': '40% Physical / 60% Lightning',
        'weapon': 'Katana',
        'signature': 'Inverse - Shadow',
        'faction': 'Gray Raven',
        'gift': 'Frog Accessory',
        'serviceTime': '6 years',
        'mentalAge': '17',
        'activationDate': '15 Jun',
        'height': '165 cm',
        'weight': '48 kg',
        'vitalFluidType': 'A'
    },
    'lux':{
        'name': 'Liv',
        'title': 'Luv',
        'rank': 'A',
        'class': 'Support', 
        'element': '20% Physical / 80% Lightning',
        'weapon': 'Levi-Gun',
        'signature': 'Benediction',
        'faction': 'Gray Raven',
        'gift': 'Biosphere',
        'serviceTime': '2 years',
        'mentalAge': '16',
        'activationDate': '10 Aug',
        'height': '155 cm',
        'weight': '43 kg',
        'vitalFluidType': 'O'
    },
    'palefire':{
        'name': 'Lee',
        'title': 'Palefire',
        'rank': 'A',
        'class': 'Attacker', 
        'element': '60% Physical / 40% Fire',
        'weapon': 'Dual Guns',
        'signature': 'Wolf Fang',
        'faction': 'Gray Raven',
        'gift': 'P. Toolkit',
        'serviceTime': '2 years',
        'mentalAge': '18',
        'activationDate': '23 Jul',
        'height': '175 cm',
        'weight': '63 kg',
        'vitalFluidType': 'AB'
    },
    'nightblade':{
        'name': 'Watanabe',
        'title': 'Nightblade',
        'rank': 'A',
        'class': 'Attacker', 
        'element': '100% Physical',
        'weapon': 'Dagger',
        'signature': 'Soul Ripper',
        'faction': 'Forsaken',
        'gift': 'MRE Ratns.',
        'serviceTime': '6 years',
        'mentalAge': '26',
        'activationDate': '12 Apr',
        'height': '185 cm',
        'weight': '76 kg',
        'vitalFluidType': 'O'
    },
    'zero':{
        'name': 'Bianca',
        'title': 'Zero',
        'rank': 'A',
        'class': 'Attacker', 
        'element': '100% Physical',
        'weapon': 'Bow',
        'signature': 'Ramiel',
        'faction': 'Punishing Force',
        'gift': 'Lily Brooch',
        'serviceTime': '6 years',
        'mentalAge': '25',
        'activationDate': '21 Nov',
        'height': '172 cm',
        'weight': '57 kg',
        'vitalFluidType': 'A'
    },
    'blast':{
        'name': 'Karenina',
        'title': 'Blast',
        'rank': 'A',
        'class': 'Attacker', 
        'element': '80% Physical / 20 % Fire',
        'weapon': 'Cannon',
        'signature': 'B. Fusion',
        'faction': 'Engineering Force',
        'gift': 'P. Engine',
        'serviceTime': '4 years',
        'mentalAge': '16',
        'activationDate': '2 Mar',
        'height': '163 cm',
        'weight': '42 kg',
        'vitalFluidType': 'B'
    },
    'luminance':{
        'name': 'Liv',
        'title': 'Luminance',
        'rank': 'S',
        'class': 'Support', 
        'element': '100% Physical',
        'weapon': 'Levi-Gun',
        'signature': 'D. Wind',
        'faction': 'Gray Raven',
        'gift': 'Biosphere',
        'serviceTime': '2 years',
        'mentalAge': '16',
        'activationDate': '10 Aug',
        'height': '155 cm',
        'weight': '43 kg',
        'vitalFluidType': 'O'
    },
    'entropy':{
        'name': 'Lee',
        'title': 'Entropy',
        'rank': 'S',
        'class': 'Attacker', 
        'element': '100% Physical',
        'weapon': 'Dual Guns',
        'signature': 'Zero Scale',
        'faction': 'Gray Raven',
        'gift': 'P. Toolkit',
        'serviceTime': '2 years',
        'mentalAge': '18',
        'activationDate': '23 Jul',
        'height': '175 cm',
        'weight': '63 kg',
        'vitalFluidType': 'AB'
    },
    'ember':{
        'name': 'Karenina',
        'title': 'Ember',
        'rank': 'S',
        'class': 'Attacker', 
        'element': '30% Physical / 70% Fire',
        'weapon': 'Cannon',
        'signature': 'F. Dragon',
        'faction': 'Engineering Force',
        'gift': 'P. Engine',
        'serviceTime': '4 years',
        'mentalAge': '16',
        'activationDate': '2 Mar',
        'height': '163 cm',
        'weight': '42 kg',
        'vitalFluidType': 'B'
    },
    'pulse':{
        'name': 'Nanami',
        'title': 'Pulse',
        'rank': 'S',
        'class': 'Tank', 
        'element': '50% Physical / 50% Fire',
        'weapon': 'Saw',
        'signature': 'Hydro Heat',
        'faction': 'Unidentified',
        'gift': 'Jack-in.',
        'serviceTime': 'Unknown',
        'mentalAge': 'Unknown',
        'activationDate': 'Unknown',
        'height': '145 cm',
        'weight': '45 kg',
        'vitalFluidType': 'Unknown'
    },
    'tenebrion':{
        'name': 'Kamui',
        'title': 'Tenebrion',
        'rank': 'S',
        'class': 'Tank', 
        'element': '50% Physical / 50% Fire',
        'weapon': 'Greatsword',
        'signature': 'Darkness',
        'faction': 'Strike Hawk',
        'gift': 'PGC',
        'serviceTime': '3 years',
        'mentalAge': '19',
        'activationDate': '23 Oct',
        'height': '180 cm',
        'weight': '72 kg',
        'vitalFluidType': 'B'
    },
    'crimsonabyss':{
        'name': 'Lucia',
        'title': 'Crimson Abyss',
        'rank': 'S',
        'class': 'Attacker', 
        'element': '100% Physical',
        'weapon': 'Katana',
        'signature': 'Sakura',
        'faction': 'Ascendant',
        'gift': 'Frog Acc.',
        'serviceTime': '6 years',
        'mentalAge': '17',
        'activationDate': '15 Jun',
        'height': '165 cm',
        'weight': '48 kg',
        'vitalFluidType': 'A'
    },
    'bastion':{
        'name': 'Kamui',
        'title': 'Bastion',
        'rank': 'A',
        'class': 'Tank', 
        'element': '100% Physical',
        'weapon': 'Greatsword',
        'signature': 'Big Kamui',
        'faction': 'Strike Hawk',
        'gift': 'PGC',
        'serviceTime': '3 years',
        'mentalAge': '19',
        'activationDate': '23 Oct',
        'height': '180 cm',
        'weight': '72 kg',
        'vitalFluidType': 'B'
    },
    'astral':{
        'name': 'Watanabe',
        'title': 'Astral',
        'rank': 'A',
        'class': 'Attacker', 
        'element': '50% Physical / 50% Dark',
        'weapon': 'Dagger',
        'signature': 'Peacemaker',
        'faction': 'Forsaken',
        'gift': 'MRE Ratns.',
        'serviceTime': '6 years',
        'mentalAge': '26',
        'activationDate': '12 Apr',
        'height': '185 cm',
        'weight': '76 kg',
        'vitalFluidType': 'O'
    },
    'brilliance':{
        'name': 'Ayla',
        'title': 'Brilliance',
        'rank': 'A',
        'class': 'Tank', 
        'element': '100% Physical',
        'weapon': 'Scythe',
        'signature': 'Purple Peony',
        'faction': 'WGAA',
        'gift': 'Paint Kit',
        'serviceTime': '1 years',
        'mentalAge': '18',
        'activationDate': '15 Dec',
        'height': '167 cm',
        'weight': '64 kg',
        'vitalFluidType': 'O'
    },
    'veritas':{
        'name': 'Bianca',
        'title': 'Veritas',
        'rank': 'S',
        'class': 'Attacker', 
        'element': '20% Physical / 80% Lightning',
        'weapon': 'Bow',
        'signature': 'Tonitrus',
        'faction': 'Punishing Force',
        'gift': 'Lily Brooch',
        'serviceTime': '6 years',
        'mentalAge': '25',
        'activationDate': '21 Nov',
        'height': '172 cm',
        'weight': '57 kg',
        'vitalFluidType': 'A'
    },
    'silverfang':{
        'name': 'Sophia',
        'title': 'Silverfang',
        'rank': 'A',
        'class': 'Support', 
        'element': '20% Physical / 80% Fire',
        'weapon': 'Dual Guns',
        'signature': 'Scion',
        'faction': 'ACA',
        'gift': 'H-Pow. Batt',
        'serviceTime': '0 years',
        'mentalAge': '15',
        'activationDate': '3 Oct',
        'height': '153 cm',
        'weight': '36 kg',
        'vitalFluidType': 'A'
    },
    'arclight':{
        'name': 'Chrome',
        'title': 'Arclight',
        'rank': 'A',
        'class': 'Tank', 
        'element': '30% Physical / 70% Lightning',
        'weapon': 'Scythe',
        'signature': 'St. Elmo',
        'faction': 'Strike Hawk',
        'gift': 'R3 Cleaning Robot',
        'serviceTime': '2 years',
        'mentalAge': '19',
        'activationDate': '31 Jul',
        'height': '178 cm',
        'weight': '60 kg',
        'vitalFluidType': 'B'
    },
    'plume': {
        'name': 'Lucia',
        'title': 'Plume',
        'rank': 'S',
        'class': 'Attacker', 
        'element': '20% Physical / 80% Fire',
        'weapon': 'Katana',
        'signature': 'Crimson Birch',
        'faction': 'Gray Raven',
        'gift': 'Frog Accessory',
        'serviceTime': '6 years',
        'mentalAge': '17',
        'activationDate': '15 Jun',
        'height': '165 cm',
        'weight': '48 kg',
        'vitalFluidType': 'A'
    },
    'rozen': {
        'name': 'Vera',
        'title': 'Rozen',
        'rank': 'A',
        'class': 'Support', 
        'element': '20% Physical / 80% Dark',
        'weapon': 'Katana',
        'signature': 'Sariel',
        'faction': 'Cerberus',
        'gift': 'Bionic Dog',
        'serviceTime': '2 years',
        'mentalAge': '17',
        'activationDate': '31 Oct',
        'height': '164 cm',
        'weight': '44 kg',
        'vitalFluidType': 'B'
    },
    'crocotta': {
        'name': 'Camu',
        'title': 'Crocotta',
        'rank': 'S',
        'class': 'Vanguard', 
        'element': '20% Physical / 80% Dark',
        'weapon': 'Greatsword (T)',
        'signature': 'Thanatos',
        'faction': 'Strike Hawk',
        'gift': 'Media Player',
        'serviceTime': 'Unknown',
        'mentalAge': '19',
        'activationDate': '23 Oct',
        'height': '180 cm',
        'weight': '72 kg',
        'vitalFluidType': 'B'
    },
    'rigor': {
        'name': 'Rosetta',
        'title': 'Rigor',
        'rank': 'S',
        'class': 'Tank', 
        'element': '100% Physical',
        'weapon': 'Spr. Shield',
        'signature': 'Gungnir',
        'faction': 'ARU',
        'gift': 'Weather Glass',
        'serviceTime': '0 years',
        'mentalAge': '18',
        'activationDate': '25 Dec',
        'height': '177 cm',
        'weight': '65 kg',
        'vitalFluidType': 'A'
    },
    'qilin': {
        'name': 'Changyu',
        'title': 'Qilin',
        'rank': 'A',
        'class': 'Tank', 
        'element': '20% Physical / 80% Ice',
        'weapon': 'Gauntlets',
        'signature': 'Baji',
        'faction': 'ACA',
        'gift': 'Copper Coin',
        'serviceTime': '0 years',
        'mentalAge': '16',
        'activationDate': '7 Apr',
        'height': '157 cm',
        'weight': '51 kg',
        'vitalFluidType': 'A'
    },
    'pavo': {
        'name': 'Qu',
        'title': 'Pavo',
        'rank': 'S',
        'class': 'Vanguard', 
        'element': '100% Physical',
        'weapon': 'T. Glaive',
        'signature': 'Qinghe',
        'faction': 'KCC',
        'gift': 'Antique Book',
        'serviceTime': '0 years',
        'mentalAge': '18',
        'activationDate': '3 Jan',
        'height': '162 cm',
        'weight': '43 kg',
        'vitalFluidType': 'AB'
    },
    'laurel': {
        'name': 'Luna',
        'title': 'Laurel',
        'rank': 'S',
        'class': 'Attacker', 
        'element': '10% Physical / 90% Dark',
        'weapon': 'T. Amplifier',
        'signature': 'Ozma',
        'faction': 'Ascendent',
        'gift': 'Night Light',
        'serviceTime': '0 years',
        'mentalAge': '16',
        'activationDate': '26 Oct',
        'height': '159 cm',
        'weight': '41 kg',
        'vitalFluidType': 'AB'
    },
    '2b': {
        'name': '2B',
        'title': '2B',
        'rank': 'S',
        'class': 'Attacker', 
        'element': '100% Physical',
        'weapon': 'Katana & Greatsword',
        'signature': 'Virtuous Contract - Mod',
        'faction': 'YoRHa',
        'gift': 'Lunar Tear',
        'serviceTime': 'Unknown',
        'mentalAge': 'Unknown',
        'activationDate': 'Unknown',
        'height': '168 cm (including Heels)',
        'weight': '148.8 kg',
        'vitalFluidType': 'Unknown'
    },
    '9s': {
        'name': '9S',
        'title': '9S',
        'rank': 'S',
        'class': 'Support', 
        'element': '100% Physical',
        'weapon': 'Katana',
        'signature': 'Cruel Oath - Mod',
        'faction': 'YoRHa',
        'gift': 'Lunar Tear',
        'serviceTime': 'Unknown',
        'mentalAge': 'Unknown',
        'activationDate': '30 Jan',
        'height': '160 cm (including Boots)',
        'weight': '129.9 kg',
        'vitalFluidType': 'Unknown'
    },
    'a2': {
        'name': 'A2',
        'title': 'A2',
        'rank': 'S',
        'class': 'Tank', 
        'element': '100% Physical',
        'weapon': 'Tactical Lance',
        'signature': 'Type-4O Lance - Mod',
        'faction': 'YoRHa',
        'gift': 'Lunar Tear',
        'serviceTime': 'Unknown',
        'mentalAge': 'Unknown',
        'activationDate': 'Unknown',
        'height': '168 cm (including Heels)',
        'weight': '139.2 kg',
        'vitalFluidType': 'Unknown'
    },
    'hypnos': {
        'name': 'Wanshi',
        'title': 'Hypnos',
        'rank': 'A',
        'class': 'Support', 
        'element': '20% Physical / 80% Ice',
        'weapon': 'Rifle',
        'signature': 'Scale',
        'faction': 'Strike Hawk',
        'gift': 'Hugging Pillow',
        'serviceTime': '1 years',
        'mentalAge': '20',
        'activationDate': '21 May',
        'height': '178 cm',
        'weight': '64 kg',
        'vitalFluidType': 'B'
    },
    'tempest': {
        'name': 'Selena',
        'title': 'Tempest',
        'rank': 'S',
        'class': 'Vanguard', 
        'element': '10% Physical / 90% Lightning',
        'weapon': 'Cello Blade',
        'signature': 'Waldmeister',
        'faction': 'Unidentified',
        'gift': 'Iris',
        'serviceTime': '3 years',
        'mentalAge': '20',
        'activationDate': '27 Sep',
        'height': '163 cm',
        'weight': '41 kg',
        'vitalFluidType': 'O'
    },
    'glory':{
        'name': 'Chrome',
        'title': 'Glory',
        'rank': 'S',
        'class': 'Tank', 
        'element': '20% Physical / 80% Ice',
        'weapon': 'Gunblade',
        'signature': 'Apollo',
        'faction': 'Strike Hawk',
        'gift': 'Cleaning Robot',
        'serviceTime': '2 years',
        'mentalAge': '19',
        'activationDate': '31 Jul',
        'height': '178 cm',
        'weight': '60 kg',
        'vitalFluidType': 'B'
    },
    'xxi':{
        'name': 'No.21',
        'title': 'XXI',
        'rank': 'A',
        'class': 'Tank', 
        'element': '20% Physical / 80% Dark',
        'weapon': 'Collab Bot',
        'signature': 'Snore',
        'faction': 'Cerberus',
        'gift': 'Audiovisual Terminal',
        'serviceTime': '2 years',
        'mentalAge': '22',
        'activationDate': '21 Jan',
        'height': '154 cm',
        'weight': '42 kg',
        'vitalFluidType': 'O'
    },
    'garnet': {
        'name': 'Vera',
        'title': 'Garnet',
        'rank': 'S',
        'class': 'Tank', 
        'element': '15% Physical / 85% Lightning',
        'weapon': 'Banner Spear',
        'signature': 'Phoenix',
        'faction': 'Cerberus',
        'gift': 'Bionic Dog',
        'serviceTime': '2 years',
        'mentalAge': '17',
        'activationDate': '31 Oct',
        'height': '164 cm',
        'weight': '44 kg',
        'vitalFluidType': 'B'
    },
    'flambeau': {
        'name': 'Roland',
        'title': 'Flambeau',
        'rank': 'S',
        'class': 'Vanguard', 
        'element': '20% Physical / 80% Fire',
        'weapon': 'Chain Blade (T)',
        'signature': 'Durendal',
        'faction': 'Unidentified',
        'gift': 'Marionette',
        'serviceTime': 'Unknown',
        'mentalAge': '19',
        'activationDate': '2 May',
        'height': '178 cm',
        'weight': '70 kg',
        'vitalFluidType': 'AB'
    },
    'empyrea':{
        'name': 'Liv',
        'title': 'Empyrea',
        'rank': 'S',
        'class': 'Amplifier', 
        'element': '10% Physical / 90% Lightning',
        'weapon': 'Scepter',
        'signature': 'Hestia',
        'faction': 'Gray Raven',
        'gift': 'Biosphere',
        'serviceTime': '2 years',
        'mentalAge': '16',
        'activationDate': '10 Aug',
        'height': '155 cm',
        'weight': '43 kg',
        'vitalFluidType': 'O'
    },
    'capriccio': {
        'name': 'Selena',
        'title': 'Capriccio',
        'rank': 'S',
        'class': 'Amplifier', 
        'element': '10% Physical / 90% Dark',
        'weapon': 'Flute Sword',
        'signature': 'Sarastro',
        'faction': 'WGAA',
        'gift': 'Iris',
        'serviceTime': '3 years',
        'mentalAge': '20',
        'activationDate': '27 Sep',
        'height': '163 cm',
        'weight': '41 kg',
        'vitalFluidType': 'O'
    },
    'dragontoll': {
        'name': 'Pulao',
        'title': 'Dragontoll',
        'rank': 'S',
        'class': 'Vanguard', 
        'element': '100% Physical',
        'weapon': 'Dragon Maelstrom (T)',
        'signature': 'Infinity',
        'faction': 'KCC',
        'gift': 'Coin Purse',
        'serviceTime': '0 years',
        'mentalAge': '14',
        'activationDate': '15 Aug',
        'height': '140 cm',
        'weight': '32 kg',
        'vitalFluidType': 'A'
    },
    'starfarer':{
        'name': 'Nanami',
        'title': 'Starfarer',
        'rank': 'S',
        'class': 'Tank', 
        'element': '100% Fire',
        'weapon': 'Ultra-Saw',
        'signature': 'Implosion',
        'faction': 'Unidentified',
        'gift': 'Jack-in.',
        'serviceTime': 'Unknown',
        'mentalAge': 'Unknown',
        'activationDate': 'Unknown',
        'height': '145 cm',
        'weight': '45 kg',
        'vitalFluidType': 'Unknown'
    },
    'starveil':{
        'name': 'Haicma',
        'title': 'Starveil',
        'rank': 'S',
        'class': 'Vanguard', 
        'element': '10% Physical / 90% Fire',
        'weapon': 'Scythe',
        'signature': 'Galatea',
        'faction': 'Unidentified',
        'gift': 'Picture Book',
        'serviceTime': 'Unknown',
        'mentalAge': 'Unknown',
        'activationDate': 'Unknown',
        'height': '166 cm',
        'weight': '50 kg',
        'vitalFluidType': 'Unknown'
    },
    'scire':{
        'name': 'Karenina',
        'title': 'Scire',
        'rank': 'S',
        'class': 'Tank', 
        'element': '100% Dark',
        'weapon': 'Blast Hammer',
        'signature': 'Illuminare',
        'faction': 'Engineering Force',
        'gift': 'P. Engine',
        'serviceTime': '4 years',
        'mentalAge': '16',
        'activationDate': '2 Mar',
        'height': '163 cm',
        'weight': '42 kg',
        'vitalFluidType': 'B'
    },
    'arca':{
        'name': 'Noan',
        'title': 'Arca',
        'rank': 'S',
        'class': 'Vanguard', 
        'element': '10% Physical / 90 % Lightning',
        'weapon': 'Expulsion Blade',
        'signature': 'Prometheus',
        'faction': 'Argali',
        'gift': 'Notebook',
        'serviceTime': '0 years',
        'mentalAge': '21',
        'activationDate': '8 Aug',
        'height': '182 cm',
        'weight': '69 kg',
        'vitalFluidType': 'A'
    },
    'stigmata':{
        'name': 'Bianca',
        'title': 'Stigmata',
        'rank': 'S',
        'class': 'Attacker', 
        'element': '100% Physical',
        'weapon': 'Swordstaff',
        'signature': 'Hecate',
        'faction': 'Punishing Force',
        'gift': 'Lily Brooch',
        'serviceTime': '6 years',
        'mentalAge': '25',
        'activationDate': '21 Nov',
        'height': '172 cm',
        'weight': '57 kg',
        'vitalFluidType': 'A'
    },
    'vitrum':{
        'name': 'Bambinata',
        'title': 'Vitrum',
        'rank': 'A',
        'class': 'Attacker', 
        'element': '20% Physical / 80% Ice',
        'weapon': 'Mantis Blades',
        'signature': 'Sound of Silence',
        'faction': 'Egret',
        'gift': 'Musical Box',
        'serviceTime': 'Unknown',
        'mentalAge': '9',
        'activationDate': '5 Dec',
        'height': '135.5 cm',
        'weight': '29 kg',
        'vitalFluidType': 'AB'
    },
    'hyperreal':{
        'name': 'Lee',
        'title': 'Hyperreal',
        'rank': 'S',
        'class': 'Attacker', 
        'element': '100% Fire',
        'weapon': 'Composite Arms',
        'signature': 'Time Tunnel Key: Stokes',
        'faction': 'Gray Raven',
        'gift': 'Precision Toolkit',
        'serviceTime': '2 years',
        'mentalAge': '18',
        'activationDate': '23 Jul',
        'height': '175 cm',
        'weight': '63 kg',
        'vitalFluidType': 'AB'
    },
    'kaleido':{
        'name': 'Ayla',
        'title': 'Kaleido',
        'rank': 'S',
        'class': 'Amplifier', 
        'element': '100% Ice',
        'weapon': 'Laser Gunlance',
        'signature': 'The Starry Voyager',
        'faction': 'Iris Warbler',
        'gift': 'Painting Kit',
        'serviceTime': '1 years',
        'mentalAge': '18',
        'activationDate': '15 Dec',
        'height': '167 cm',
        'weight': '64 kg',
        'vitalFluidType': 'O'
    },
    'crimsonweave':{
        'name': 'Lucia',
        'title': 'Crimson Weave',
        'rank': 'S',
        'class': 'Attacker', 
        'element': '100% Lightning',
        'weapon': 'Tachi of Sealing',
        'signature': 'Blazing Night',
        'faction': 'Ascendant',
        'gift': 'Frog Acc.',
        'serviceTime': '6 years',
        'mentalAge': '17',
        'activationDate': '15 Jun',
        'height': '165 cm',
        'weight': '48 kg',
        'vitalFluidType': 'A'
    },
    'zitherwoe':{
        'name': 'Hanying',
        'title': 'Zitherwoe',
        'rank': 'A',
        'class': 'Support', 
        'element': '100% Physical',
        'weapon': 'Folding Fan',
        'signature': 'Perpetuity',
        'faction': 'Church of the Machina',
        'gift': 'Danyun Comb',
        'serviceTime': 'Unknown',
        'mentalAge': '???',
        'activationDate': '24 July',
        'height': '169 cm',
        'weight': '53 kg',
        'vitalFluidType': '???'
    },
    'feralscent':{
        'name': 'No.21',
        'title': 'Feral Scent',
        'rank': 'S',
        'class': 'Amplifier', 
        'element': '100% Lightning',
        'weapon': 'Claws',
        'signature': 'Managarmr',
        'faction': 'Cerberus',
        'gift': 'Audiovisual Terminal',
        'serviceTime': '2 years',
        'mentalAge': '22',
        'activationDate': '21 Jan',
        'height': '154 cm',
        'weight': '42 kg',
        'vitalFluidType': 'O'
    },
    'indomitus':{
        'name': 'Noctis',
        'title': 'Indomitus',
        'rank': 'A',
        'class': 'Attacker', 
        'element': '100% Lightning',
        'weapon': 'Mechanical Arm',
        'signature': 'Crimson Roar',
        'faction': 'Cerberus',
        'gift': 'H.-duty Boxing Gloves',
        'serviceTime': '??? years',
        'mentalAge': '24',
        'activationDate': '25 Mar',
        'height': '183 cm',
        'weight': '80 kg',
        'vitalFluidType': 'B'
    },
    'echo':{
        'name': 'Alisa',
        'title': 'Echo',
        'rank': 'S',
        'class': 'Amplifier', 
        'element': '100% Physical',
        'weapon': 'Bow',
        'signature': 'Astraea',
        'faction': 'Unidentified',
        'gift': 'Gavel',
        'serviceTime': 'Unknown',
        'mentalAge': '16',
        'activationDate': '22 Mar',
        'height': '159 cm',
        'weight': '41 kg',
        'vitalFluidType': 'AB'
    },
    'lostlullaby':{
        'name': 'Lamia',
        'title': 'Lost Lullaby',
        'rank': 'S',
        'class': 'Attacker', 
        'element': '100% Dark',
        'weapon': 'Xeno-Glaive',
        'signature': 'Metis',
        'faction': 'Ascendant',
        'gift': 'Coffee Mug',
        'serviceTime': 'Unknown',
        'mentalAge': '15',
        'activationDate': '21 Feb',
        'height': '169 cm',
        'weight': '49 kg',
        'vitalFluidType': 'A'
    },
    'brs':{
        'name': 'BRS',
        'title': 'BRS',
        'rank': 'A',
        'class': 'Attacker', 
        'element': '100% Fire',
        'weapon': 'Blade Cannon',
        'signature': '*Rock Cannon',
        'faction': 'Unidentified',
        'gift': 'Star Ornament',
        'serviceTime': 'Unknown',
        'mentalAge': 'Unknown',
        'activationDate': 'Unknown',
        'height': 'Unknown',
        'weight': 'Unknown',
        'vitalFluidType': 'Unknown'
    },
    'epitaph':{
        'name': 'Watanabe',
        'title': 'Epitaph',
        'rank': 'S',
        'class': 'Tank', 
        'element': '10% Physical / 90% Fire',
        'weapon': "Pioneer's Blade",
        'signature': 'Night Falcon',
        'faction': 'Forsaken',
        'gift': 'MRE Ratns.',
        'serviceTime': 'Unknown',
        'mentalAge': '26',
        'activationDate': '12 Apr',
        'height': '185 cm',
        'weight': '76 kg',
        'vitalFluidType': 'O'
    },
    'shukra': {
        'name': 'Qu',
        'title': 'Shukra',
        'rank': 'S',
        'class': 'Attacker', 
        'element': '100% Ice',
        'weapon': 'Longsword',
        'signature': 'Dwelling Will',
        'faction': 'KCC',
        'gift': 'Antique Book',
        'serviceTime': 'Unknown',
        'mentalAge': '18',
        'activationDate': '3 Jan',
        'height': '162 cm',
        'weight': '43 kg',
        'vitalFluidType': 'AB'
    },
    'unknown':{
        'name': 'unknown',
        'title': 'unknown',
        'rank': 'unknown',
        'class': 'unknown', 
        'element': 'unknown',
        'weapon': 'unknown',
        'signature': 'unknown',
        'faction': 'unknown',
        'gift': 'unknown',
        'serviceTime': 'unknown',
        'mentalAge': 'unknown',
        'activationDate': 'unknown',
        'height': 'unknown',
        'weight': 'unknown',
        'vitalFluidType': 'unknown'
    }
}

// GET request (Read request) that looks for the URL requesting the index.html file, responds with it
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html') // Responding to the request by sending our index.html file. __dirname states that wherever server.js file is located, that is where we will start looking four our files.
})

app.get('/api', (request, response) => { // Responding to API request by sending JSON. '/:name' is part of the URL so someone can replcae this with a specific object name and receive just that back. ':' reminds us that it is part of the query parameter. It is not part of the path.
    response.json(constructs)
})

app.get('/api/:name', (request, response) => { // Responding to API request by sending JSON. '/:name' is part of the URL so someone can replcae this with a specific object name and receive just that back. ':' reminds us that it is part of the query parameter. It is not part of the path.
    const constructName = request.params.name.toLowerCase() // Variable that contains any "parameter" which returns a specific object within our API.
    // Conditional that responds with a specific object from our list of objects
    if(constructs[constructName]){ // Look at object and grab our key.
        response.json(constructs[constructName])
    }else{
        response.json(constructs['unknown'])
    }
})

app.get('/optionsone', function (req, res) {
    res.json(optionsone);
})

/* app.get('/options1', (req, res) => {
    res.header("Content-Type",'application/json');
    res.sendFile(path.join(__dirname, 'options1.json'));
}) */

app.listen(process.env.PORT || PORT, () => { // Establishes the port that the server listens for. process.env.PORT tells the code to use the PORT that our API host uses, otherwise use our own PORT.
    console.log(`Server running on port ${PORT}`) // Informs us the server is running
})

module.exports = app;