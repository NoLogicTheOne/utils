export default () => {
    let chars = 'abcdefghijklmnopqrstuvwxyz0123456789'; 
    let string = ""
    for(var ii=(Math.random() * 7) | 0 + 8; ii>0; ii--){
    	let char = chars[(Math.random() * chars.length) | 0]
        string += Math.random() > .5 ? char : char.toUpperCase();
    }
    
    return string
}