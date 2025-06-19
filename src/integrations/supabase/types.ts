export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bot_sessions: {
        Row: {
          bot_code_id: string
          bot_name: string
          bot_token_hash: string
          created_at: string
          id: string
          last_heartbeat: string | null
          message_count: number | null
          server_count: number | null
          status: string
          updated_at: string
          uptime_seconds: number | null
          user_count: number | null
          user_id: string | null
        }
        Insert: {
          bot_code_id: string
          bot_name: string
          bot_token_hash: string
          created_at?: string
          id?: string
          last_heartbeat?: string | null
          message_count?: number | null
          server_count?: number | null
          status?: string
          updated_at?: string
          uptime_seconds?: number | null
          user_count?: number | null
          user_id?: string | null
        }
        Update: {
          bot_code_id?: string
          bot_name?: string
          bot_token_hash?: string
          created_at?: string
          id?: string
          last_heartbeat?: string | null
          message_count?: number | null
          server_count?: number | null
          status?: string
          updated_at?: string
          uptime_seconds?: number | null
          user_count?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          id: string
          updated_at: string | null
          username: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
        }
        Relationships: []
      }
      wellness_progress: {
        Row: {
          blocked_attempts_today: number | null
          created_at: string | null
          current_streak: number | null
          id: string
          last_update_date: string | null
          total_days_clean: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          blocked_attempts_today?: number | null
          created_at?: string | null
          current_streak?: number | null
          id?: string
          last_update_date?: string | null
          total_days_clean?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          blocked_attempts_today?: number | null
          created_at?: string | null
          current_streak?: number | null
          id?: string
          last_update_date?: string | null
          total_days_clean?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      wellness_settings: {
        Row: {
          admin_password: string | null
          block_end_time: string | null
          block_start_time: string | null
          blocked_apps: string[] | null
          blocked_domains: string[] | null
          created_at: string | null
          id: string
          schedule_enabled: boolean | null
          updated_at: string | null
          user_id: string
          user_password: string | null
        }
        Insert: {
          admin_password?: string | null
          block_end_time?: string | null
          block_start_time?: string | null
          blocked_apps?: string[] | null
          blocked_domains?: string[] | null
          created_at?: string | null
          id?: string
          schedule_enabled?: boolean | null
          updated_at?: string | null
          user_id: string
          user_password?: string | null
        }
        Update: {
          admin_password?: string | null
          block_end_time?: string | null
          block_start_time?: string | null
          blocked_apps?: string[] | null
          blocked_domains?: string[] | null
          created_at?: string | null
          id?: string
          schedule_enabled?: boolean | null
          updated_at?: string | null
          user_id?: string
          user_password?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      update_bot_session_stats: {
        Args: {
          session_id: string
          new_server_count?: number
          new_user_count?: number
          new_message_count?: number
          new_status?: string
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
