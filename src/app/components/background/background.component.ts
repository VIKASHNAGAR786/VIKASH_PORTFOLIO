import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// import loadFull and tsParticles from 'tsparticles' package
import { loadFull,  } from 'tsparticles';

// import types from engine package
import { ISourceOptions, Engine ,tsParticles} from '@tsparticles/engine';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [CommonModule],
  template: `<div id="tsparticles" class="particles-container"></div>`,
  styles: [`
    .particles-container {
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      z-index: -1;
      background-color: #0f172a;
    }
  `]
})
export class BackgroundComponent implements AfterViewInit {

  private readonly options: ISourceOptions = {
    fullScreen: { enable: false },
    background: { color: { value: "#0f172a" } },
    fpsLimit: 60,
    particles: {
      number: { value: 80, density: { enable: true, width: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 3 } },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: { default: "bounce" }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      }
    },
    detectRetina: true,
  };

  async ngAfterViewInit(): Promise<void> {
    // load tsparticles full features into tsParticles engine
    await loadFull(tsParticles as Engine);
    // load particles on div with id 'tsparticles'
    await tsParticles.load({ id: 'tsparticles', options: this.options });
  }
}
