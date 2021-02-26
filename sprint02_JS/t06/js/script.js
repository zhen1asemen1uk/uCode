let num = 1,
    bint = 1n,
    str = "Бла-бла-бла",
    bol = true,
    nuull = 'null' ,
    und = undefined,
    objecctt = new Object(),
    sym = Symbol(),
    fun = function a(){asdas};

    alert(typeof(num) + '\n' +
     typeof(bint)+ '\n' +
     typeof(str)+ '\n' +
     typeof(bol)+ '\n' +
     (nuull)+ '\n' +
     typeof(und)+ '\n' +
     typeof(objecctt)+ '\n' +
     typeof(sym)+ '\n' +
     typeof(fun));