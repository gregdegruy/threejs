void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 offset = vec2(0.2,0.8);
    vec2 uv = (fragCoord - offset)/iResolution.xy;

    // Time varying pixel color
    // vec3 col = 0.5 + 0.5*sin(iTime + uv.xyx + vec3(0,2,4));
    // vec3 col = sin(vec3(1,0,0));
    // vec3 params represent both color and coordinate values
    // mask this will draw four quadrants with different levels of red
    // vec3 col = round(uv.xyx*1.0) + vec3(1,0,0);
    // this works in terms light, as the blue values moves beyond 1 or 2 it will draw white on screen
    // vec3 col = round(uv.x*0.6) + vec3(0,0,1);
    
    vec3 col = round(uv.xyx*0.6) + vec3(0,0,1);
    // vec3 params represent both color and coordinate values
    // this mask will override color drawn on screen within 1 and 0
    // if we did 1.0 + clamp and took an add based approach it will always
    // overflow to the smae color representation
    // clamp moves output between 0 and 1
    float maskForeground = 1.0 - clamp(col.r + col.g, 0.0, 1.0);
    // to set our mask as white we must take the inverse of it
    
    float maskBackground = 1.0 - maskForeground;
    
    // Output to screen and use mask to first draw black to screen
    // and the rounded UV with an offset. then we draw our white 
    // mask on top of it
    vec3 white = vec3(1.0, 1.0, 1.0);
    fragColor = vec4(col*maskForeground + maskBackground * white, 1.0);
}
