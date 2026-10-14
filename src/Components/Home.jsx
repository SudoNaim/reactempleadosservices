import React, { Component } from 'react'
import './Home.css'

export default class HomeComponent extends Component {
  render() {
    return (
      <main className="home-page">
        <section className="home-hero">
          <div className="container py-5">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <span className="home-eyebrow">PORTAL DEL EMPLEADO</span>
                <h1 className="display-4 fw-bold mt-3">
                  Toda la información de tu equipo, en un solo lugar.
                </h1>
                <p className="lead text-secondary mt-3 mb-4">
                  Consulta rápidamente los datos profesionales de los empleados
                  de Tajamar y encuentra a la persona que necesitas.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <button type="button" className="btn btn-primary btn-lg px-4">
                    Consultar empleados
                  </button>
                  <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                    Ver departamentos
                  </button>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="home-summary-card shadow-sm">
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <div>
                      <p className="text-secondary mb-1">Resumen de la plantilla</p>
                      <h2 className="h3 mb-0">Curso 2025 / 2026</h2>
                    </div>
                    <span className="home-status-dot" aria-label="Datos actualizados"></span>
                  </div>
                  <div className="row g-3">
                    <div className="col-6">
                      <div className="home-stat">
                        <span className="home-stat-number">128</span>
                        <span className="home-stat-label">Empleados</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="home-stat">
                        <span className="home-stat-number">12</span>
                        <span className="home-stat-label">Departamentos</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="home-stat">
                        <span className="home-stat-number">96%</span>
                        <span className="home-stat-label">Fichas completas</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="home-stat">
                        <span className="home-stat-number">Hoy</span>
                        <span className="home-stat-label">Última actualización</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-5">
          <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
            <div>
              <span className="home-eyebrow">ACCESOS RÁPIDOS</span>
              <h2 className="h3 mt-2 mb-0">¿Qué quieres consultar?</h2>
            </div>
            <p className="text-secondary mb-0">Información organizada y fácil de encontrar</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <article className="home-feature-card h-100">
                <div className="home-icon home-icon-blue">⌕</div>
                <h3 className="h5 mt-4">Buscar empleados</h3>
                <p className="text-secondary mb-0">
                  Encuentra una ficha por nombre, puesto o departamento.
                </p>
              </article>
            </div>
            <div className="col-md-4">
              <article className="home-feature-card h-100">
                <div className="home-icon home-icon-green">▦</div>
                <h3 className="h5 mt-4">Explorar departamentos</h3>
                <p className="text-secondary mb-0">
                  Consulta cómo se organiza el equipo y quién forma parte de él.
                </p>
              </article>
            </div>
            <div className="col-md-4">
              <article className="home-feature-card h-100">
                <div className="home-icon home-icon-orange">✓</div>
                <h3 className="h5 mt-4">Datos actualizados</h3>
                <p className="text-secondary mb-0">
                  Accede siempre a la información profesional más reciente.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      
    )
  }
}
