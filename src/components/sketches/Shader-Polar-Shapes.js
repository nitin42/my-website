import { createShaderCanvas } from 'react-shader-canvas'

const polarShapeShader = props => `
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

#define PI 3.14159265359

float gain(float x, float k) {
  float a = 0.5*pow(2.0*((x<0.5)?x:1.0-x), k);
  return (x<0.5)?a:1.0-a;
}

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

float pcurve( float x, float a, float b ){
  float k = pow(a+b,a+b) / (pow(a,a)*pow(b,b));
  return k * pow( x, a ) * pow( 1.0-x, b );
}

vec3 colorA = vec3(${
  props.useStarShap ? 'sin(u_time * 0.85)' : 'sin(u_time)'
}, ${props.useStarShap ? 'cos(u_time * 0.45)' : 'cos(u_time)'}, 0.5);
vec3 colorB = vec3(tan(u_time * 0.45), sin(u_time * 0.2), 0.8);

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    vec2 pos = vec2(0.5)-st;

    st -= vec2(0.5);
    st = rotate2d( sin(u_time)*3.0*PI ) * st;
    st += vec2(0.5);

    float r = pcurve(length(pos)*2.0, sin(u_time), cos(u_time));
    float a = atan(pos.y,pos.x);

    float f = cos(a*3.);
    ${props.useStarShap ? 'f = abs(cos(a*3.));' : ''}

    color = mix(colorA, colorB, 1.-smoothstep(f,f+0.02,r));

    gl_FragColor = vec4(color, 1.0);
}
`

const PolarShapes = createShaderCanvas(polarShapeShader)

export default PolarShapes
