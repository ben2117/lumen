environment = {{}}
target = "lua"
function nil63(x)
  return(x == nil)
end
function is63(x)
  return(not nil63(x))
end
function _35(x)
  return(#x)
end
function none63(x)
  return(_35(x) == 0)
end
function some63(x)
  return(_35(x) > 0)
end
function one63(x)
  return(_35(x) == 1)
end
function hd(l)
  return(l[1])
end
function string63(x)
  return(type(x) == "string")
end
function number63(x)
  return(type(x) == "number")
end
function boolean63(x)
  return(type(x) == "boolean")
end
function function63(x)
  return(type(x) == "function")
end
function obj63(x)
  return(is63(x) and type(x) == "table")
end
function atom63(x)
  return(nil63(x) or not obj63(x))
end
nan = 0 / 0
inf = 1 / 0
_inf = -(1 / 0)
function nan63(n)
  return(not (n == n))
end
function inf63(n)
  return(n == inf or n == _inf)
end
local str = string
function clip(s, from, upto)
  return(str.sub(s, from + 1, upto))
end
function cut(x, from, upto)
  local l = {}
  local j = 0
  local _ue118
  if nil63(from) or from < 0 then
    _ue118 = 0
  else
    _ue118 = from
  end
  local i = _ue118
  local n = _35(x)
  local _ue119
  if nil63(upto) or upto > n then
    _ue119 = n
  else
    _ue119 = upto
  end
  local _uid124 = _ue119
  while i < _uid124 do
    l[j + 1] = x[i + 1]
    i = i + 1
    j = j + 1
  end
  local _ux25 = x
  local k = nil
  for k in next, _ux25 do
    local v = _ux25[k]
    if not number63(k) then
      l[k] = v
    end
  end
  return(l)
end
function keys(x)
  local t = {}
  local _ux28 = x
  local k = nil
  for k in next, _ux28 do
    local v = _ux28[k]
    if not number63(k) then
      t[k] = v
    end
  end
  return(t)
end
function edge(x)
  return(_35(x) - 1)
end
function inner(x)
  return(clip(x, 1, edge(x)))
end
function tl(l)
  return(cut(l, 1))
end
function char(s, n)
  return(clip(s, n, n + 1))
end
function code(s, n)
  local _ue120
  if n then
    _ue120 = n + 1
  end
  return(str.byte(s, _ue120))
end
function string_literal63(x)
  return(string63(x) and char(x, 0) == "\"")
end
function id_literal63(x)
  return(string63(x) and char(x, 0) == "|")
end
function add(l, x)
  return(table.insert(l, x))
end
function drop(l)
  return(table.remove(l))
end
function last(l)
  return(l[edge(l) + 1])
end
function butlast(l)
  return(cut(l, 0, edge(l)))
end
function reverse(l)
  local l1 = keys(l)
  local i = edge(l)
  while i >= 0 do
    add(l1, l[i + 1])
    i = i - 1
  end
  return(l1)
end
function join(a, b)
  if a and b then
    local c = {}
    local o = _35(a)
    local _ux43 = a
    local k = nil
    for k in next, _ux43 do
      local v = _ux43[k]
      c[k] = v
    end
    local _ux45 = b
    local k = nil
    for k in next, _ux45 do
      local v = _ux45[k]
      if number63(k) then
        k = k + o
      end
      c[k] = v
    end
    return(c)
  else
    return(a or b or {})
  end
end
function reduce(f, x)
  if none63(x) then
    return(x)
  else
    if one63(x) then
      return(hd(x))
    else
      return(f(hd(x), reduce(f, tl(x))))
    end
  end
end
function find(f, t)
  local _ux49 = t
  local _uignored1 = nil
  for _uignored1 in next, _ux49 do
    local x = _ux49[_uignored1]
    local _uid151 = f(x)
    if _uid151 then
      return(_uid151)
    end
  end
end
function first(f, l)
  local n = _35(l)
  local i = 0
  while i < n do
    local x = f(l[i + 1])
    if x then
      return(x)
    end
    i = i + 1
  end
end
function in63(x, t)
  return(find(function (y)
    return(x == y)
  end, t))
end
function pair(l)
  local i = 0
  local l1 = {}
  while i < _35(l) do
    add(l1, {l[i + 1], l[i + 1 + 1]})
    i = i + 2
  end
  return(l1)
end
function sort(l, f)
  table.sort(l, f)
  return(l)
end
function map(f, x)
  local t = {}
  local n = _35(x)
  local i = 0
  while i < n do
    local y = f(x[i + 1])
    if is63(y) then
      add(t, y)
    end
    i = i + 1
  end
  local _ux59 = x
  local k = nil
  for k in next, _ux59 do
    local v = _ux59[k]
    if not number63(k) then
      local y = f(v)
      if is63(y) then
        t[k] = y
      end
    end
  end
  return(t)
end
function keep(f, x)
  return(map(function (v)
    if f(v) then
      return(v)
    end
  end, x))
end
function keys63(t)
  local _ux64 = t
  local k = nil
  for k in next, _ux64 do
    local _uignored2 = _ux64[k]
    if not number63(k) then
      return(true)
    end
  end
  return(false)
end
function empty63(t)
  local _ux67 = t
  local _uignored3 = nil
  for _uignored3 in next, _ux67 do
    local _uignored4 = _ux67[_uignored3]
    return(false)
  end
  return(true)
end
function stash(args)
  if keys63(args) then
    local p = {}
    local _ux70 = args
    local k = nil
    for k in next, _ux70 do
      local v = _ux70[k]
      if not number63(k) then
        p[k] = v
      end
    end
    p._stash = true
    add(args, p)
  end
  return(args)
end
function unstash(args)
  if none63(args) then
    return({})
  else
    local l = last(args)
    if obj63(l) and l._stash then
      local args1 = butlast(args)
      local _ux73 = l
      local k = nil
      for k in next, _ux73 do
        local v = _ux73[k]
        if not (k == "_stash") then
          args1[k] = v
        end
      end
      return(args1)
    else
      return(args)
    end
  end
end
function search(s, pattern, start)
  local _ue121
  if start then
    _ue121 = start + 1
  end
  local _uid176 = _ue121
  local i = str.find(s, pattern, _uid176, true)
  return(i and i - 1)
end
function split(s, sep)
  if s == "" or sep == "" then
    return({})
  else
    local l = {}
    local n = _35(sep)
    while true do
      local i = search(s, sep)
      if nil63(i) then
        break
      else
        add(l, clip(s, 0, i))
        s = clip(s, i + n)
      end
    end
    add(l, s)
    return(l)
  end
end
function cat(...)
  local xs = unstash({...})
  if none63(xs) then
    return("")
  else
    return(reduce(function (a, b)
      return(a .. b)
    end, xs))
  end
end
function _43(...)
  local xs = unstash({...})
  return(reduce(function (a, b)
    return(a + b)
  end, xs))
end
function _(...)
  local xs = unstash({...})
  return(reduce(function (b, a)
    return(a - b)
  end, reverse(xs)))
end
function _42(...)
  local xs = unstash({...})
  return(reduce(function (a, b)
    return(a * b)
  end, xs))
end
function _47(...)
  local xs = unstash({...})
  return(reduce(function (b, a)
    return(a / b)
  end, reverse(xs)))
end
function _37(...)
  local xs = unstash({...})
  return(reduce(function (b, a)
    return(a % b)
  end, reverse(xs)))
end
function _62(a, b)
  return(a > b)
end
function _60(a, b)
  return(a < b)
end
function _61(a, b)
  return(a == b)
end
function _6261(a, b)
  return(a >= b)
end
function _6061(a, b)
  return(a <= b)
end
function number(s)
  return(tonumber(s))
end
function number_code63(n)
  return(n > 47 and n < 58)
end
function numeric63(s)
  local n = _35(s)
  local i = 0
  while i < n do
    if not number_code63(code(s, i)) then
      return(false)
    end
    i = i + 1
  end
  return(true)
end
function escape(s)
  local s1 = "\""
  local i = 0
  while i < _35(s) do
    local c = char(s, i)
    local _ue122
    if c == "\n" then
      _ue122 = "\\n"
    else
      local _ue123
      if c == "\"" then
        _ue123 = "\\\""
      else
        local _ue124
        if c == "\\" then
          _ue124 = "\\\\"
        else
          _ue124 = c
        end
        _ue123 = _ue124
      end
      _ue122 = _ue123
    end
    local c1 = _ue122
    s1 = s1 .. c1
    i = i + 1
  end
  return(s1 .. "\"")
end
function string(x, depth)
  if depth and depth > 7 then
    return("circular")
  else
    if nil63(x) then
      return("nil")
    else
      if nan63(x) then
        return("nan")
      else
        if x == inf then
          return("inf")
        else
          if x == _inf then
            return("-inf")
          else
            if boolean63(x) then
              if x then
                return("true")
              else
                return("false")
              end
            else
              if function63(x) then
                return("function")
              else
                if string63(x) then
                  return(escape(x))
                else
                  if atom63(x) then
                    return(tostring(x))
                  else
                    local s = "("
                    local sp = ""
                    local xs = {}
                    local ks = {}
                    local d = (depth or 0) + 1
                    local _ux100 = x
                    local k = nil
                    for k in next, _ux100 do
                      local v = _ux100[k]
                      if number63(k) then
                        xs[k] = string(v, d)
                      else
                        add(ks, k .. ":")
                        add(ks, string(v, d))
                      end
                    end
                    local _ux102 = join(xs, ks)
                    local _uignored5 = nil
                    for _uignored5 in next, _ux102 do
                      local v = _ux102[_uignored5]
                      s = s .. sp .. v
                      sp = " "
                    end
                    return(s .. ")")
                  end
                end
              end
            end
          end
        end
      end
    end
  end
end
local values = unpack or table.unpack
function apply(f, args)
  local _uid1105 = stash(args)
  return(f(values(_uid1105)))
end
function call(f)
  return(f())
end
function _37message_handler(msg)
  local i = search(msg, ": ")
  return(clip(msg, i + 2))
end
function toplevel63()
  return(one63(environment))
end
function setenv(k, ...)
  local _ur109 = unstash({...})
  local keys = cut(_ur109, 0)
  if string63(k) then
    local _ue125
    if keys.toplevel then
      _ue125 = hd(environment)
    else
      _ue125 = last(environment)
    end
    local frame = _ue125
    local entry = frame[k] or {}
    local _ux111 = keys
    local _uid1113 = nil
    for _uid1113 in next, _ux111 do
      local v = _ux111[_uid1113]
      entry[_uid1113] = v
    end
    frame[k] = entry
  end
end
function read_file(path)
  local f = io.open(path)
  return(f.read(f, "*a"))
end
function write_file(path, data)
  local f = io.open(path, "w")
  return(f.write(f, data))
end
function write(x)
  return(io.write(x))
end
function exit(code)
  return(os.exit(code))
end
argv = arg
local math = math
abs = math.abs
acos = math.acos
asin = math.asin
atan = math.atan
atan2 = math.atan2
ceil = math.ceil
cos = math.cos
floor = math.floor
log = math.log
log10 = math.log10
max = math.max
min = math.min
pow = math.pow
random = math.random
sin = math.sin
sinh = math.sinh
sqrt = math.sqrt
tan = math.tan
tanh = math.tanh
setenv("quote", {_stash = true, macro = function (form)
  return(quoted(form))
end})
setenv("quasiquote", {_stash = true, macro = function (form)
  return(quasiexpand(form, 1))
end})
setenv("at", {_stash = true, macro = function (l, i)
  if target == "lua" and number63(i) then
    i = i + 1
  else
    if target == "lua" then
      i = {"+", i, 1}
    end
  end
  return({"get", l, i})
end})
setenv("wipe", {_stash = true, macro = function (place)
  if target == "lua" then
    return({"set", place, "nil"})
  else
    return({"%delete", place})
  end
end})
setenv("list", {_stash = true, macro = function (...)
  local body = unstash({...})
  local id = unique("id")
  local l = {}
  local forms = {}
  local _ux33 = body
  local k = nil
  for k in next, _ux33 do
    local v = _ux33[k]
    if number63(k) then
      l[k] = v
    else
      add(forms, {"set", {"get", id, {"quote", k}}, v})
    end
  end
  if some63(forms) then
    return(join({"let", {id, join({"%array"}, l)}}, join(forms, {id})))
  else
    return(join({"%array"}, l))
  end
end})
setenv("if", {_stash = true, macro = function (...)
  local branches = unstash({...})
  return(hd(expand_if(branches)))
end})
setenv("when", {_stash = true, macro = function (cond, ...)
  local _ur47 = unstash({...})
  local body = cut(_ur47, 0)
  return({"if", cond, join({"do"}, body)})
end})
setenv("unless", {_stash = true, macro = function (cond, ...)
  local _ur55 = unstash({...})
  local body = cut(_ur55, 0)
  return({"if", {"not", cond}, join({"do"}, body)})
end})
setenv("obj", {_stash = true, macro = function (...)
  local body = unstash({...})
  return(join({"%object"}, mapo(function (x)
    return(x)
  end, body)))
end})
setenv("let", {_stash = true, macro = function (bindings, ...)
  local _ur77 = unstash({...})
  local body = cut(_ur77, 0)
  if _35(bindings) < 2 then
    return(join({"do"}, body))
  else
    local renames = {}
    local locals = {}
    local lh = bindings[1]
    local rh = bindings[2]
    local _ux80 = bind(lh, rh)
    local k = nil
    for k in next, _ux80 do
      local _uid82 = _ux80[k]
      local id = _uid82[1]
      local val = _uid82[2]
      if number63(k) then
        if bound63(id) or reserved63(id) or toplevel63() then
          local id1 = unique("id1")
          add(renames, id)
          add(renames, id1)
          id = id1
        else
          setenv(id, {_stash = true, variable = true})
        end
        add(locals, {"%local", id, val})
      end
    end
    return(join({"do"}, join(locals, {{"let-symbol", renames, join({"let", cut(bindings, 2)}, body)}})))
  end
end})
setenv("define-macro", {_stash = true, macro = function (name, args, ...)
  local _ur92 = unstash({...})
  local body = cut(_ur92, 0)
  local _uid94 = {"setenv", {"quote", name}}
  _uid94.macro = join({"fn", args}, body)
  local form = _uid94
  eval(form)
  return(form)
end})
setenv("define-special", {_stash = true, macro = function (name, args, ...)
  local _ur101 = unstash({...})
  local body = cut(_ur101, 0)
  local _uid103 = {"setenv", {"quote", name}}
  _uid103.special = join({"fn", args}, body)
  local form = join(_uid103, keys(body))
  eval(form)
  return(form)
end})
setenv("define-symbol", {_stash = true, macro = function (name, expansion)
  setenv(name, {_stash = true, symbol = expansion})
  local _uid111 = {"setenv", {"quote", name}}
  _uid111.symbol = {"quote", expansion}
  return(_uid111)
end})
setenv("define-reader", {_stash = true, macro = function (_ux121, ...)
  local char = _ux121[1]
  local s = _ux121[2]
  local _ur120 = unstash({...})
  local body = cut(_ur120, 0)
  return({"set", {"get", "read-table", char}, join({"fn", {s}}, body)})
end})
setenv("define", {_stash = true, macro = function (name, x, ...)
  local _ur130 = unstash({...})
  local body = cut(_ur130, 0)
  setenv(name, {_stash = true, variable = true})
  if some63(body) then
    return(join({"%local-function", name}, bind42(x, body)))
  else
    return({"%local", name, x})
  end
end})
setenv("define-global", {_stash = true, macro = function (name, x, ...)
  local _ur137 = unstash({...})
  local body = cut(_ur137, 0)
  setenv(name, {_stash = true, toplevel = true, variable = true})
  if some63(body) then
    return(join({"%global-function", name}, bind42(x, body)))
  else
    return({"set", name, x})
  end
end})
setenv("with-frame", {_stash = true, macro = function (...)
  local _ur149 = unstash({...})
  local body = cut(_ur149, 0)
  local scope = _ur149.scope
  local x = unique("x")
  local _uid153 = {"obj"}
  _uid153._scope = scope
  return({"do", {"add", "environment", _uid153}, {"let", {x, join({"do"}, body)}, {"drop", "environment"}, x}})
end})
setenv("with-bindings", {_stash = true, macro = function (_ux165, ...)
  local names = _ux165[1]
  local _ur164 = unstash({...})
  local body = cut(_ur164, 0)
  local x = unique("x")
  local _uid170 = {"setenv", x}
  _uid170.variable = true
  local _uid167 = {"with-frame", {"each", {"_uignored1", x}, names, _uid170}}
  _uid167.scope = true
  return(join(_uid167, body))
end})
setenv("let-fn", {_stash = true, macro = function (_ux177, ...)
  local name = _ux177[1]
  local args = _ux177[2]
  local fn_body = cut(_ux177, 2)
  local _ur176 = unstash({...})
  local body = cut(_ur176, 0)
  return(join({"let", {name, join({"fn", args}, fn_body)}}, body))
end})
setenv("let-macro", {_stash = true, macro = function (definitions, ...)
  local _ur187 = unstash({...})
  local body = cut(_ur187, 0)
  add(environment, {})
  map(function (m)
    return(macroexpand(join({"define-macro"}, m)))
  end, definitions)
  local _ux189 = join({"do"}, macroexpand(body))
  drop(environment)
  return(_ux189)
end})
setenv("let-symbol", {_stash = true, macro = function (expansions, ...)
  local _ur199 = unstash({...})
  local body = cut(_ur199, 0)
  add(environment, {})
  map(function (_ux203)
    local name = _ux203[1]
    local exp = _ux203[2]
    return(macroexpand({"define-symbol", name, exp}))
  end, pair(expansions))
  local _ux201 = join({"do"}, macroexpand(body))
  drop(environment)
  return(_ux201)
end})
setenv("let-unique", {_stash = true, macro = function (names, ...)
  local _ur212 = unstash({...})
  local body = cut(_ur212, 0)
  local bs = map(function (n)
    return({n, {"unique", {"quote", n}}})
  end, names)
  return(join({"let", reduce(join, bs)}, body))
end})
setenv("fn", {_stash = true, macro = function (args, ...)
  local _ur221 = unstash({...})
  local body = cut(_ur221, 0)
  return(join({"%function"}, bind42(args, body)))
end})
setenv("guard", {_stash = true, macro = function (expr)
  if target == "js" then
    return({{"fn", {}, {"%try", {"list", true, expr}}}})
  else
    local e = unique("e")
    local x = unique("x")
    local ex = "|" .. e .. "," .. x .. "|"
    return({"let", {ex, {"xpcall", {"fn", {}, expr}, "%message-handler"}}, {"list", e, x}})
  end
end})
setenv("each", {_stash = true, macro = function (_ux260, t, ...)
  local k = _ux260[1]
  local v = _ux260[2]
  local _ur259 = unstash({...})
  local body = cut(_ur259, 0)
  local x = unique("x")
  local n = unique("n")
  local _ue390
  if target == "lua" then
    _ue390 = body
  else
    _ue390 = {join({"let", {k, {"if", {"numeric?", k}, {"parseInt", k}, k}}}, body)}
  end
  return({"let", {x, t, k, "nil"}, {"%for", x, k, join({"let", {v, {"get", x, k}}}, _ue390)}})
end})
setenv("for", {_stash = true, macro = function (_ux283, ...)
  local i = _ux283[1]
  local to = _ux283[2]
  local _ur282 = unstash({...})
  local body = cut(_ur282, 0)
  return({"let", {i, 0}, join({"while", {"<", i, to}}, join(body, {{"inc", i}}))})
end})
setenv("across", {_stash = true, macro = function (_ux302, ...)
  local v = _ux302[1]
  local t = _ux302[2]
  local _ur301 = unstash({...})
  local body = cut(_ur301, 0)
  local x = unique("x")
  local n = unique("n")
  local i = unique("i")
  return({"let", {x, t, n, {"#", x}}, {"for", {i, n}, join({"let", {v, {"at", x, i}}}, body)}})
end})
setenv("set-of", {_stash = true, macro = function (...)
  local xs = unstash({...})
  local l = {}
  local _ux318 = xs
  local _uignored2 = nil
  for _uignored2 in next, _ux318 do
    local x = _ux318[_uignored2]
    l[x] = true
  end
  return(join({"obj"}, l))
end})
setenv("language", {_stash = true, macro = function ()
  return({"quote", target})
end})
setenv("target", {_stash = true, macro = function (...)
  local clauses = unstash({...})
  return(clauses[target])
end})
setenv("join*", {_stash = true, macro = function (...)
  local xs = unstash({...})
  return(reduce(function (a, b)
    return({"join", a, b})
  end, xs))
end})
setenv("join!", {_stash = true, macro = function (a, ...)
  local _ur334 = unstash({...})
  local bs = cut(_ur334, 0)
  return({"set", a, join({"join*", a}, bs)})
end})
setenv("cat!", {_stash = true, macro = function (a, ...)
  local _ur341 = unstash({...})
  local bs = cut(_ur341, 0)
  return({"set", a, join({"cat", a}, bs)})
end})
setenv("inc", {_stash = true, macro = function (n, by)
  return({"set", n, {"+", n, by or 1}})
end})
setenv("dec", {_stash = true, macro = function (n, by)
  return({"set", n, {"-", n, by or 1}})
end})
setenv("with-indent", {_stash = true, macro = function (form)
  local x = unique("x")
  return({"do", {"inc", "indent-level"}, {"let", {x, form}, {"dec", "indent-level"}, x}})
end})
setenv("export", {_stash = true, macro = function (...)
  local names = unstash({...})
  if target == "js" then
    return(join({"do"}, map(function (k)
      return({"set", {"get", "exports", {"quote", k}}, k})
    end, names)))
  else
    local x = {}
    local _ux386 = names
    local _uignored3 = nil
    for _uignored3 in next, _ux386 do
      local k = _ux386[_uignored3]
      x[k] = k
    end
    return({"return", join({"obj"}, x)})
  end
end})
local reader = require("reader")
local compiler = require("compiler")
local function rep(s)
  local form = reader["read-string"](s)
  local _ue3,_ux4 = xpcall(function ()
    return(compiler.eval(form))
  end, _37message_handler)
  local _uid2 = {_ue3, _ux4}
  local ok = _uid2[1]
  local x = _uid2[2]
  if not ok then
    return(print("error: " .. x))
  else
    if is63(x) then
      return(print(string(x)))
    end
  end
end
local function repl()
  write("> ")
  local rep1 = function (s)
    rep(s)
    return(write("> "))
  end
  while true do
    local s = io.read()
    if s then
      rep1(s)
    else
      break
    end
  end
end
local function usage()
  print("usage: lumen [options] <object files>")
  print("options:")
  print("  -c <input>\tInput file")
  print("  -o <output>\tOutput file")
  print("  -t <target>\tTarget language (default: lua)")
  print("  -e <expr>\tExpression to evaluate")
  return(exit())
end
local function main()
  if hd(argv) == "-h" or hd(argv) == "--help" then
    usage()
  end
  local pre = {}
  local input = nil
  local output = nil
  local target1 = nil
  local expr = nil
  local n = _35(argv)
  local i = 0
  while i < n do
    local a = argv[i + 1]
    if a == "-c" or a == "-o" or a == "-t" or a == "-e" then
      if i == n - 1 then
        print("missing argument for " .. a)
      else
        i = i + 1
        local val = argv[i + 1]
        if a == "-c" then
          input = val
        else
          if a == "-o" then
            output = val
          else
            if a == "-t" then
              target1 = val
            else
              if a == "-e" then
                expr = val
              end
            end
          end
        end
      end
    else
      if not ("-" == char(a, 0)) then
        add(pre, a)
      end
    end
    i = i + 1
  end
  local _ux11 = pre
  local _un12 = _35(_ux11)
  local _ui13 = 0
  while _ui13 < _un12 do
    local file = _ux11[_ui13 + 1]
    compiler["run-file"](file)
    _ui13 = _ui13 + 1
  end
  if input and output then
    if target1 then
      target = target1
    end
    local code = compiler["compile-file"](input)
    return(write_file(output, code))
  else
    if expr then
      return(rep(expr))
    else
      return(repl())
    end
  end
end
main()
