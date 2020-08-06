export interface Launch {
    flight_number: number
    mission_name: string
    upcoming: boolean
    launch_year: string
    launch_date_unix: number
    launch_date_utc: string
    launch_date_local: string
    mission_id: []
    launch_success: boolean
    launch_landing: boolean
    links: {}
}
