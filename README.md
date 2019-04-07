# vec-js
Vec-js is a 2D and 3D vector math library for Nodejs. 

# Installation
npm
```sh
npm install vec-js
```

# Building/Testing 
Build with 
```sh
npm run build
```

Run Jest unit tests with
```sh
npm run test
```

# Example
```javascript
Vector3.up()
    .scale(15)
    .dot(new Vector3(1, 12, 8));

Vector2.left()
    .add(new Vector2(6, 9))
    .normalize()
    .distance(Vector2.zero()); 
```

# Notes
This project is primarily a small tool to help familiarize myself with Typescript and Jest, but the end result should be usable in any application with a need for 2D or 3D vector representations.

# Future
- Support for matricies and matrix operations. (+ use to implement vector transforms).
- Support for geometry (plane, line, triangle, cube, sphere, etc + intersection tests).