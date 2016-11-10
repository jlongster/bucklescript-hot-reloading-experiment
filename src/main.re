let msg = "Poop!" ^ Dep.secret;

print_string msg;

print_newline ();

print_newline ();

[%%bs.raw {| if(module.hot) { module.hot.accept() } |}];
/* if module##hot print_string "hot"; */
