
<script>
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import academic from "../../assets/images/clientes/academic_logo.png";
    import bit from "../../assets/images/clientes/bit_logo.png";
    import ellasJuegan from "../../assets/images/clientes/ellasjuegan_logo.png";
    import imcufidem from "../../assets/images/clientes/imcufidem_logo.png";
    import metepec from "../../assets/images/clientes/metepec_logo.png";
    import rdm from "../../assets/images/clientes/rdm_logo.png";
    import sabbi from "../../assets/images/clientes/sabbi_logo.png";
    import samva from "../../assets/images/clientes/samva_logo.png";
    import toluca from "../../assets/images/clientes/toluca_logo.png";
    import viivo from "../../assets/images/clientes/viivo_logosports_logo.png";


</script>

<div class=" py-28">
    <Splide class="h-full"  options={ {
            perPage: 5,
            arrows: false,
            pagination: false,
            type: 'loop',
            rewind:true,
            rewindSpeed:500,
            autoplay:true,
            interval:2000,
            
            
      }}>
        <SplideSlide>
           <div class="h-20 relative">
                <img alt="Academic Logo" src={academic.src} class="absolute w-full h-full object-contain" />
           </div>
        </SplideSlide>
        <SplideSlide>
            <div class="h-20 relative">
                <img alt="Academic Logo" src={bit.src} class="absolute w-full h-full object-contain" />
            </div>
        </SplideSlide> 
        <SplideSlide>
            <div class="h-20 relative">
                <img alt="Academic Logo" src={ellasJuegan.src} class="absolute w-full h-full object-contain" />
            </div>
        </SplideSlide> 
        <SplideSlide>
            <div class="h-20 relative">
                <img alt="Academic Logo" src={imcufidem.src} class="absolute w-full h-full object-contain" />
            </div>
        </SplideSlide> 
        <SplideSlide>
            <div class="h-20 relative">
                <img alt="Academic Logo" src={metepec.src} class="absolute w-full h-full object-contain" />
            </div>
        </SplideSlide> 
        <SplideSlide>
            <div class="h-20 relative">
                <img alt="Academic Logo" src={rdm.src} class="absolute w-full h-full object-contain" />
            </div>
        </SplideSlide> 
        <SplideSlide>
            <div class="h-20 relative">
                <img alt="Academic Logo" src={sabbi.src} class="absolute w-full h-full object-contain" />
            </div>
        </SplideSlide> 
        <SplideSlide>
            <div class="h-20 relative">
                <img alt="Academic Logo" src={samva.src} class="absolute w-full h-full object-contain" />
            </div>
        </SplideSlide> 
        <SplideSlide>
            <div class="h-20 relative">
                <img alt="Academic Logo" src={toluca.src} class="absolute w-full h-full object-contain" />
            </div>
        </SplideSlide> 
        <SplideSlide>
            <div class="h-20 relative">
                <img alt="Academic Logo" src={viivo.src} class="absolute w-full h-full object-contain" />
            </div>
        </SplideSlide> 
    </Splide>
      

</div>