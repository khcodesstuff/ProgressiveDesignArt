$(function(){
    const home_screen = document.getElementById('section-hello');
    const home_screen_orange_circle = document.querySelector('#section-hello .orange-circle');
    const home_screen_purple_circle = document.querySelector('#section-hello .purple-circle');

    const section_philosophy = document.getElementById('section-philosophy');
    const philosophy_p = document.querySelector('#section-philosophy p');

    const block_making_history = document.getElementById('making-history');
    const block_m_h_content = document.querySelector('#making-history .content');
    const block_mission = document.getElementById('mission');
    const block_mission_content = document.querySelector('#mission .content');

    const block_exellence_innovation = document.querySelector('.row-exellence-innovation');
    const block_ex_in_content_ex = document.querySelector('.exellence-innovation .info-left'); // Exellence text
    const block_ex_in_content_in = document.querySelector('.exellence-innovation .info-right'); // Innovation text
    const block_ex_in_art = document.querySelector('.exellence-innovation .art-center');

    const section_art_display = document.getElementById('section-art-display');
    const art_to_display = document.getElementsByClassName('art');

    const section_we_rock = document.getElementById('section-we-rock');
    const we_rock_circle = document.querySelector('#section-we-rock .orange-circle');

    window.addEventListener('scroll', () => {
        anim_based_on_scroll(home_screen, home_screen_orange_circle, 'fadeInLeftBig');
        anim_based_on_scroll(home_screen, home_screen_purple_circle, 'fadeInRightBig');
    
        anim_based_on_scroll(section_philosophy, philosophy_p, 'fadeIn', 100, 100);
        
        anim_based_on_scroll(block_making_history, block_m_h_content, 'fadeIn', 0, 300);
        anim_based_on_scroll(block_mission, block_mission_content, 'fadeIn', 0, 300);
    
        anim_based_on_scroll(block_exellence_innovation, block_ex_in_content_ex, 'fadeInLeft', 0, 300);
        anim_based_on_scroll(block_exellence_innovation, block_ex_in_content_in, 'fadeInRight', 0, 300);
        anim_based_on_scroll(block_exellence_innovation, block_ex_in_art, 'zoomIn', 0, 300);
        
        if(is_scrolled_over(section_art_display)){
            for(let i = 0; i < art_to_display.length; i++){
                animateCSS_reset(art_to_display[i], 'fadeIn');
            }
        }
        else if(is_scrolled_to_bottom(section_art_display, 200)){
            for(let i = 0; i < art_to_display.length; i++){
                animateCSS(art_to_display[i], 'fadeIn');
            }
        }

        anim_based_on_scroll(section_we_rock, we_rock_circle, 'rotateInUpLeft', 0, 100);
    });
});

const anim_based_on_scroll = (block, node, animation, offset_over=0, offset_btm=0) => {
    if (is_scrolled_under(block)){
        animateCSS_reset(node, animation);
    }
    else if (is_scrolled_over(block, offset_over)){
        animateCSS_reset(node, animation);
    }
    else if (is_scrolled_to_bottom(block, offset_btm)){
        animateCSS(node, animation);
    }
}

const is_scrolled_under = (element) => {
    return  window.scrollY >=
            element.offsetTop +
            element.offsetHeight;
        }
        
const is_scrolled_over = (element, offset_top=0) => {
    return  window.scrollY + window.innerHeight <=
    element.offsetTop + offset_top;
}

const is_scrolled_to_bottom = (element, offset_btm=0) => {
    return  window.scrollY >=
            element.offsetTop +
            element.offsetHeight -
            window.innerHeight -
            offset_btm;
}

const animateCSS = (node, animation, prefix='animate__') => {
    const animationName = `${prefix}${animation}`;

    node.classList.add(`${prefix}animated`, animationName);
}

const animateCSS_reset = (node, animation, prefix='animate__') => {
    const animationName = `${prefix}${animation}`;

    node.classList.remove(`${prefix}animated`, animationName);
}