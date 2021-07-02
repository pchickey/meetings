Object.assign(window.search, {"doc_urls":["chapter_1.html#introduction","chapter_1a.html#the-lightweight-component-model","chapter_1b.html#the-canonical-abi-proposal","chapter_1c.html#canonical-abi-implications","chapter_2.html#application-to-core-wasm-wasi","chapter_2a.html#handles-and-resources","chapter_2b.html#buffers","chapter_2c.html#working-with-witx"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":2,"title":1},"1":{"body":28,"breadcrumbs":7,"title":3},"2":{"body":19,"breadcrumbs":7,"title":3},"3":{"body":27,"breadcrumbs":7,"title":3},"4":{"body":0,"breadcrumbs":8,"title":4},"5":{"body":41,"breadcrumbs":8,"title":2},"6":{"body":43,"breadcrumbs":6,"title":1},"7":{"body":26,"breadcrumbs":8,"title":2}},"docs":{"0":{"body":"","breadcrumbs":"Introduction » Introduction","id":"0","title":"Introduction"},"1":{"body":"https://docs.google.com/presentation/d/1PSC3Q5oFsJEaYyV5lNJvVgh-SNxhySWUqZ6puyojMi8 Module Linking, Interface types, Typed Main What's great about wasm, plus: black-box reuse external composition Examples: Don't export all of linear memory Don't pass around slices with arbitrary lifetimes","breadcrumbs":"Introduction » The Lightweight Component Model » The Lightweight Component Model","id":"1","title":"The Lightweight Component Model"},"2":{"body":"https://github.com/WebAssembly/interface-types/pull/132 A specific ABI for Interface Types in terms of Core Wasm types and features Lower list, variant, etc. into Core Wasm types and concepts.","breadcrumbs":"Introduction » The Canonical ABI proposal » The Canonical ABI proposal","id":"2","title":"The Canonical ABI proposal"},"3":{"body":"The Canonical ABI gives us a path to: Adopt Interface Types without waiting for full adapter functions Preserves many of the important properties A way to adopt interface types for Core Wasm modules as well So we can share witx tooling","breadcrumbs":"Introduction » Canonical ABI implications » Canonical ABI implications","id":"3","title":"Canonical ABI implications"},"4":{"body":"","breadcrumbs":"Application to Core-Wasm WASI » Application to Core-Wasm WASI","id":"4","title":"Application to Core-Wasm WASI"},"5":{"body":"Presentation to WASI: https://docs.google.com/presentation/d/1ikwS2Ps-KLXFofuS5VAs6Bn14q4LBEaxMjPfLj61UZE Handles in the Canonical ABI are i32 indices. Think \"file descriptors\" The Canonical ABI handles the management of tables. (resource $input_byte_stream_resource) (typename $input_byte_stream (handle $input_byte_stream_resource)) (export \"read\" (func (param $source $input_byte_stream) (param $buffer (pull-buffer u8)) (result $result (expected (tuple u64 $read_status) (error))) ))","breadcrumbs":"Application to Core-Wasm WASI » Handles and Resources » Handles and Resources","id":"5","title":"Handles and Resources"},"6":{"body":"push-buffer, pull-buffer Temporary views for memory buffers In the Canonical ABI, this is memory + offset + len (resource $input_byte_stream_resource) (typename $input_byte_stream (handle $input_byte_stream_resource)) (export \"read\" (func (param $source $input_byte_stream) (param $buffer (pull-buffer u8)) (result $result (expected (tuple u64 $read_status) (error))) )) Vectored I/O can be considered when we have full adapter functions.","breadcrumbs":"Application to Core-Wasm WASI » Buffers » Buffers","id":"6","title":"Buffers"},"7":{"body":"Witx is evolving into an IDL. One interface description covers: Canonical ABI for core Wasm Canonical ABI for components Full adapter-function ABI for components And cf. last week's presentation: Blocking Non-blocking","breadcrumbs":"Application to Core-Wasm WASI » Working with witx » Working with witx","id":"7","title":"Working with witx"}},"length":8,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"a":{"b":{"df":0,"docs":{},"i":{"df":5,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951},"5":{"tf":1.4142135623730951},"6":{"tf":1.0},"7":{"tf":1.7320508075688772}}}},"d":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":3,"docs":{"3":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}},"r":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}}},"b":{"df":0,"docs":{},"l":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"x":{"df":1,"docs":{"1":{"tf":1.0}}}},"u":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":2.449489742783178}}}}}}}},"c":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":5,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951},"5":{"tf":1.4142135623730951},"6":{"tf":1.0},"7":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"f":{"df":1,"docs":{"7":{"tf":1.0}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":1.0},"7":{"tf":1.4142135623730951}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"n":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"df":4,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.0},"4":{"tf":1.0},"7":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}}}},"t":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"v":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":3,"docs":{"1":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"f":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":3,"docs":{"3":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0}}}},"n":{"c":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":3,"docs":{"3":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"h":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"l":{"df":2,"docs":{"5":{"tf":2.0},"6":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"d":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"/":{"d":{"/":{"1":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":0,"docs":{},"w":{"df":0,"docs":{},"s":{"2":{"df":0,"docs":{},"p":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}}},"p":{"df":0,"docs":{},"s":{"c":{"3":{"df":0,"docs":{},"q":{"5":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"s":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"y":{"df":0,"docs":{},"v":{"5":{"df":0,"docs":{},"l":{"df":0,"docs":{},"n":{"df":0,"docs":{},"j":{"df":0,"docs":{},"v":{"df":0,"docs":{},"v":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"y":{"/":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"a":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"/":{"df":0,"docs":{},"o":{"df":1,"docs":{"6":{"tf":1.0}}}},"3":{"2":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"d":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"n":{"d":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"_":{"b":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"m":{"_":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}}},"df":2,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"a":{"c":{"df":4,"docs":{"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.4142135623730951},"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"k":{"df":0,"docs":{},"l":{"df":0,"docs":{},"x":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"5":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"s":{"6":{"b":{"df":0,"docs":{},"n":{"1":{"4":{"df":0,"docs":{},"q":{"4":{"df":0,"docs":{},"l":{"b":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"x":{"df":0,"docs":{},"m":{"df":0,"docs":{},"j":{"df":0,"docs":{},"p":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"j":{"6":{"1":{"df":0,"docs":{},"u":{"df":0,"docs":{},"z":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}}},"n":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"k":{"df":1,"docs":{"1":{"tf":1.0}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"n":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":2,"docs":{"1":{"tf":1.0},"6":{"tf":1.4142135623730951}}}}}}},"o":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"u":{"df":0,"docs":{},"l":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"n":{"df":1,"docs":{"7":{"tf":1.0}}}},"p":{"a":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":1,"docs":{"1":{"tf":1.0}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.0},"7":{"tf":1.0}}}},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.4142135623730951}}}},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}}}}},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"x":{"df":0,"docs":{},"h":{"df":0,"docs":{},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"df":0,"docs":{},"u":{"df":0,"docs":{},"q":{"df":0,"docs":{},"z":{"6":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"8":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}}}}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":3,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.7320508075688772},"3":{"tf":1.4142135623730951}},"n":{"a":{"df":0,"docs":{},"m":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}},"s":{"/":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"/":{"1":{"3":{"2":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}},"u":{"6":{"4":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}},"8":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}},"v":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"w":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"s":{"df":0,"docs":{},"i":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}},"m":{"df":5,"docs":{"1":{"tf":1.0},"2":{"tf":1.4142135623730951},"3":{"tf":1.0},"4":{"tf":1.0},"7":{"tf":1.0}}}},"y":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"k":{"'":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"h":{"a":{"df":0,"docs":{},"t":{"'":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"x":{"df":2,"docs":{"3":{"tf":1.0},"7":{"tf":1.4142135623730951}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}},"breadcrumbs":{"root":{"a":{"b":{"df":0,"docs":{},"i":{"df":5,"docs":{"2":{"tf":2.0},"3":{"tf":2.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.0},"7":{"tf":1.7320508075688772}}}},"d":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":3,"docs":{"3":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":4,"docs":{"4":{"tf":1.7320508075688772},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0}}},"df":0,"docs":{}}}}},"r":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}}},"b":{"df":0,"docs":{},"l":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"x":{"df":1,"docs":{"1":{"tf":1.0}}}},"u":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":2.8284271247461903}}}}}}}},"c":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":5,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":2.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.0},"7":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"f":{"df":1,"docs":{"7":{"tf":1.0}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":1.7320508075688772},"7":{"tf":1.4142135623730951}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"n":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"df":6,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.0},"4":{"tf":1.7320508075688772},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.4142135623730951}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}}}},"t":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"v":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":3,"docs":{"1":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"f":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":3,"docs":{"3":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0}}}},"n":{"c":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":3,"docs":{"3":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"h":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"l":{"df":2,"docs":{"5":{"tf":2.449489742783178},"6":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"d":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"/":{"d":{"/":{"1":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":0,"docs":{},"w":{"df":0,"docs":{},"s":{"2":{"df":0,"docs":{},"p":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}}},"p":{"df":0,"docs":{},"s":{"c":{"3":{"df":0,"docs":{},"q":{"5":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"s":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"y":{"df":0,"docs":{},"v":{"5":{"df":0,"docs":{},"l":{"df":0,"docs":{},"n":{"df":0,"docs":{},"j":{"df":0,"docs":{},"v":{"df":0,"docs":{},"v":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"y":{"/":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"a":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"/":{"df":0,"docs":{},"o":{"df":1,"docs":{"6":{"tf":1.0}}}},"3":{"2":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"d":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"n":{"d":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"_":{"b":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"m":{"_":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}}},"df":2,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"a":{"c":{"df":4,"docs":{"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.4142135623730951},"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":4,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"k":{"df":0,"docs":{},"l":{"df":0,"docs":{},"x":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"5":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"s":{"6":{"b":{"df":0,"docs":{},"n":{"1":{"4":{"df":0,"docs":{},"q":{"4":{"df":0,"docs":{},"l":{"b":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"x":{"df":0,"docs":{},"m":{"df":0,"docs":{},"j":{"df":0,"docs":{},"p":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"j":{"6":{"1":{"df":0,"docs":{},"u":{"df":0,"docs":{},"z":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}}}}}}}},"n":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"k":{"df":1,"docs":{"1":{"tf":1.0}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"n":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":2,"docs":{"1":{"tf":1.0},"6":{"tf":1.4142135623730951}}}}}}},"o":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}},"u":{"df":0,"docs":{},"l":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"n":{"df":1,"docs":{"7":{"tf":1.0}}}},"p":{"a":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":1,"docs":{"1":{"tf":1.0}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.0},"7":{"tf":1.0}}}},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.4142135623730951}}}},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":2,"docs":{"5":{"tf":2.0},"6":{"tf":1.0}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}}}}},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"x":{"df":0,"docs":{},"h":{"df":0,"docs":{},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"df":0,"docs":{},"u":{"df":0,"docs":{},"q":{"df":0,"docs":{},"z":{"6":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"8":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}}}}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":3,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.7320508075688772},"3":{"tf":1.4142135623730951}},"n":{"a":{"df":0,"docs":{},"m":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}},"s":{"/":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"/":{"1":{"3":{"2":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}},"u":{"6":{"4":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}},"8":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}},"v":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"w":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"s":{"df":0,"docs":{},"i":{"df":4,"docs":{"4":{"tf":1.7320508075688772},"5":{"tf":1.4142135623730951},"6":{"tf":1.0},"7":{"tf":1.0}}},"m":{"df":7,"docs":{"1":{"tf":1.0},"2":{"tf":1.4142135623730951},"3":{"tf":1.0},"4":{"tf":1.7320508075688772},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.4142135623730951}}}},"y":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"k":{"'":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"h":{"a":{"df":0,"docs":{},"t":{"'":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"x":{"df":2,"docs":{"3":{"tf":1.0},"7":{"tf":2.0}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}}}}}}},"title":{"root":{"a":{"b":{"df":0,"docs":{},"i":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}}},"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"c":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}}}}},"m":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"w":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}},"m":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"x":{"df":1,"docs":{"7":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});