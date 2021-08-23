void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord/iResolution.y;

    // Output to screen
    vec2 centerGreenRed = vec2(0.5);
    // localize uv position to center of screen
    vec2 offset = uv - centerGreenRed;
    // condition to check if inside volume/surface
    // if (offset.x*offset.x + offset.y*offset.y < 0.5*0.5) {
    //    fragColor = vec4(uv, 0.0, 1.0);
    //} else {
    //    fragColor = vec4(0.0);
    //}
    
    // prefer a branching approach then conditionals
    fragColor = round(vec4(((offset.x*offset.x + offset.y*offset.y) / (0.5*0.5))*-1.0 + 1.0));
}
