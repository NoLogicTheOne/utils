export default () => {
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var domains = ['yandex', 'mail', 'gmail']
    var countries = ['ru', 'ua']
    const random = arr => arr[(Math.random() * arr.length) | 0]
    var string = '';
    
    for(var ii=(Math.random() * 15) | 0 + 4; ii>0; ii--){
        string += chars[Math.floor(Math.random() * chars.length)];
    }
    
    return string + '@' + random(domains) + "." + random(countries)    
}