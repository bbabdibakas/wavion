export type BuildMode = 'development' | 'production'

export interface BuildPaths {
    entry: string,
    output: string
    html: string
    src: string    
}

export interface BuildOptions {
    mode: BuildMode,
    isDev: boolean
    paths: BuildPaths
    port: number
    apiUrl: string
}

export interface BuildEnv {
    mode: BuildMode,
    port: number
}