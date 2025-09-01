 // Smooth scroll for internal links
      document.querySelectorAll('a[href^="#"]').forEach(a=>{
        a.addEventListener('click',e=>{
          const id=a.getAttribute('href').slice(1);
          const el=document.getElementById(id);
          if(el){
            e.preventDefault();
            el.scrollIntoView({behavior:'smooth', block:'start'});
          }
        })
      });

      // Reveal on scroll (respects prefers-reduced-motion)
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if(!prefersReduced){
        const io = new IntersectionObserver(entries=>{
          entries.forEach(entry=>{
            if(entry.isIntersecting){
              entry.target.classList.add('is-inview');
              io.unobserve(entry.target);
            }
          })
        }, {threshold: 0.16});
        document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
      } else {
        document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-inview'));
      }
