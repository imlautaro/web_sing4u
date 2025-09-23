export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      coupons: {
        Row: {
          code: string | null
          created_at: string | null
          discount: number
          id: number
        }
        Insert: {
          code?: string | null
          created_at?: string | null
          discount: number
          id?: number
        }
        Update: {
          code?: string | null
          created_at?: string | null
          discount?: number
          id?: number
        }
        Relationships: []
      }
      csf_articles: {
        Row: {
          category_slug: string | null
          content: string
          created_at: string
          description: string | null
          id: number
          image: string | null
          seotitle: string | null
          slug: string
          status: Database["public"]["Enums"]["status"]
          title: string
        }
        Insert: {
          category_slug?: string | null
          content: string
          created_at?: string
          description?: string | null
          id?: number
          image?: string | null
          seotitle?: string | null
          slug: string
          status?: Database["public"]["Enums"]["status"]
          title: string
        }
        Update: {
          category_slug?: string | null
          content?: string
          created_at?: string
          description?: string | null
          id?: number
          image?: string | null
          seotitle?: string | null
          slug?: string
          status?: Database["public"]["Enums"]["status"]
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "csf_articles_category_slug_fkey"
            columns: ["category_slug"]
            isOneToOne: false
            referencedRelation: "csf_categories"
            referencedColumns: ["slug"]
          },
        ]
      }
      csf_categories: {
        Row: {
          created_at: string
          description: string | null
          icon: string | null
          id: number
          seodescription: string | null
          seotitle: string | null
          slug: string
          title: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: number
          seodescription?: string | null
          seotitle?: string | null
          slug: string
          title: string
        }
        Update: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: number
          seodescription?: string | null
          seotitle?: string | null
          slug?: string
          title?: string
        }
        Relationships: []
      }
      csf_testimonials: {
        Row: {
          author: string
          created_at: string
          id: number
          photo_url: string | null
          testimony: string
        }
        Insert: {
          author: string
          created_at?: string
          id?: number
          photo_url?: string | null
          testimony: string
        }
        Update: {
          author?: string
          created_at?: string
          id?: number
          photo_url?: string | null
          testimony?: string
        }
        Relationships: []
      }
      feedback: {
        Row: {
          comment: string
          created_at: string | null
          email: string | null
          id: number
          name: string | null
        }
        Insert: {
          comment: string
          created_at?: string | null
          email?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          comment?: string
          created_at?: string | null
          email?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      groups: {
        Row: {
          name: string
        }
        Insert: {
          name: string
        }
        Update: {
          name?: string
        }
        Relationships: []
      }
      knowledge: {
        Row: {
          article_id: number | null
          content: string | null
          created_at: string
          id: number
        }
        Insert: {
          article_id?: number | null
          content?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          article_id?: number | null
          content?: string | null
          created_at?: string
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "knowledge_article_id_fkey"
            columns: ["article_id"]
            isOneToOne: true
            referencedRelation: "csf_articles"
            referencedColumns: ["id"]
          },
        ]
      }
      members: {
        Row: {
          group_name: string
          user_email: string
        }
        Insert: {
          group_name: string
          user_email: string
        }
        Update: {
          group_name?: string
          user_email?: string
        }
        Relationships: [
          {
            foreignKeyName: "members_group_name_fkey"
            columns: ["group_name"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["name"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string | null
          external_id: string | null
          id: number
          product_id: number
          user_email: string
        }
        Insert: {
          created_at?: string | null
          external_id?: string | null
          id?: number
          product_id: number
          user_email: string
        }
        Update: {
          created_at?: string | null
          external_id?: string | null
          id?: number
          product_id?: number
          user_email?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      playlist_item: {
        Row: {
          created_at: string
          filename: string
          id: number
          playlist_id: number
          subtitle: string
          title: string
        }
        Insert: {
          created_at?: string
          filename: string
          id?: number
          playlist_id: number
          subtitle: string
          title: string
        }
        Update: {
          created_at?: string
          filename?: string
          id?: number
          playlist_id?: number
          subtitle?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "playlist_item_playlist_id_fkey"
            columns: ["playlist_id"]
            isOneToOne: false
            referencedRelation: "playlists"
            referencedColumns: ["id"]
          },
        ]
      }
      playlists: {
        Row: {
          created_at: string
          id: number
          title: string
          user_email: string
        }
        Insert: {
          created_at?: string
          id?: number
          title: string
          user_email: string
        }
        Update: {
          created_at?: string
          id?: number
          title?: string
          user_email?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          name: string
          price: number
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          name: string
          price: number
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string
          price?: number
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          id: string
          nickname: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          nickname?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          nickname?: string | null
        }
        Relationships: []
      }
      properties: {
        Row: {
          created_at: string | null
          id: number
          product_id: number
          user_email: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          product_id: number
          user_email: string
        }
        Update: {
          created_at?: string | null
          id?: number
          product_id?: number
          user_email?: string
        }
        Relationships: [
          {
            foreignKeyName: "properties_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      recommendation_sections: {
        Row: {
          created_at: string | null
          id: number
          title: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          title?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          title?: string | null
        }
        Relationships: []
      }
      recommendations: {
        Row: {
          created_at: string | null
          id: number
          lang: Database["public"]["Enums"]["lang"] | null
          section: number | null
          source: string | null
          title: string | null
          type: string | null
          url: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          lang?: Database["public"]["Enums"]["lang"] | null
          section?: number | null
          source?: string | null
          title?: string | null
          type?: string | null
          url?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          lang?: Database["public"]["Enums"]["lang"] | null
          section?: number | null
          source?: string | null
          title?: string | null
          type?: string | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recommendations_section_fkey"
            columns: ["section"]
            isOneToOne: false
            referencedRelation: "recommendation_sections"
            referencedColumns: ["id"]
          },
        ]
      }
      sales: {
        Row: {
          created_at: string | null
          id: number
          product_id: number | null
          total: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          product_id?: number | null
          total?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          product_id?: number | null
          total?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      settings: {
        Row: {
          key: string
          value: string
        }
        Insert: {
          key: string
          value: string
        }
        Update: {
          key?: string
          value?: string
        }
        Relationships: []
      }
      students: {
        Row: {
          created_at: string | null
          id: number
          user_email: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          user_email: string
        }
        Update: {
          created_at?: string | null
          id?: number
          user_email?: string
        }
        Relationships: []
      }
      test: {
        Row: {
          created_at: string
          id: number
          message: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          message?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          message?: string | null
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          author: string | null
          created_at: string | null
          id: number
          testimony: string
          via: string | null
        }
        Insert: {
          author?: string | null
          created_at?: string | null
          id?: number
          testimony: string
          via?: string | null
        }
        Update: {
          author?: string | null
          created_at?: string | null
          id?: number
          testimony?: string
          via?: string | null
        }
        Relationships: []
      }
      video_lessons: {
        Row: {
          id: number
          title: string | null
          video_id: string | null
        }
        Insert: {
          id?: number
          title?: string | null
          video_id?: string | null
        }
        Update: {
          id?: number
          title?: string | null
          video_id?: string | null
        }
        Relationships: []
      }
      vocalizar: {
        Row: {
          audios: string[]
          created_at: string | null
          id: number
          name: string
        }
        Insert: {
          audios: string[]
          created_at?: string | null
          id?: number
          name: string
        }
        Update: {
          audios?: string[]
          created_at?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_groups: {
        Args: { email: string }
        Returns: string[]
      }
      get_groups_for_authenticated_user: {
        Args: Record<PropertyKey, never>
        Returns: string[]
      }
    }
    Enums: {
      lang: "en" | "es"
      status: "draft" | "archived" | "published"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          owner_id: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          owner_id: string | null
          path_tokens: string[] | null
          updated_at: string | null
          user_metadata: Json | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          user_metadata?: Json | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          user_metadata?: Json | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
        ]
      }
      s3_multipart_uploads: {
        Row: {
          bucket_id: string
          created_at: string
          id: string
          in_progress_size: number
          key: string
          owner_id: string | null
          upload_signature: string
          user_metadata: Json | null
          version: string
        }
        Insert: {
          bucket_id: string
          created_at?: string
          id: string
          in_progress_size?: number
          key: string
          owner_id?: string | null
          upload_signature: string
          user_metadata?: Json | null
          version: string
        }
        Update: {
          bucket_id?: string
          created_at?: string
          id?: string
          in_progress_size?: number
          key?: string
          owner_id?: string | null
          upload_signature?: string
          user_metadata?: Json | null
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "s3_multipart_uploads_bucket_id_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
        ]
      }
      s3_multipart_uploads_parts: {
        Row: {
          bucket_id: string
          created_at: string
          etag: string
          id: string
          key: string
          owner_id: string | null
          part_number: number
          size: number
          upload_id: string
          version: string
        }
        Insert: {
          bucket_id: string
          created_at?: string
          etag: string
          id?: string
          key: string
          owner_id?: string | null
          part_number: number
          size?: number
          upload_id: string
          version: string
        }
        Update: {
          bucket_id?: string
          created_at?: string
          etag?: string
          id?: string
          key?: string
          owner_id?: string | null
          part_number?: number
          size?: number
          upload_id?: string
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "s3_multipart_uploads_parts_bucket_id_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "s3_multipart_uploads_parts_upload_id_fkey"
            columns: ["upload_id"]
            isOneToOne: false
            referencedRelation: "s3_multipart_uploads"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: { bucketid: string; metadata: Json; name: string; owner: string }
        Returns: undefined
      }
      extension: {
        Args: { name: string }
        Returns: string
      }
      filename: {
        Args: { name: string }
        Returns: string
      }
      foldername: {
        Args: { name: string }
        Returns: string[]
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          bucket_id: string
          size: number
        }[]
      }
      list_multipart_uploads_with_delimiter: {
        Args: {
          bucket_id: string
          delimiter_param: string
          max_keys?: number
          next_key_token?: string
          next_upload_token?: string
          prefix_param: string
        }
        Returns: {
          created_at: string
          id: string
          key: string
        }[]
      }
      list_objects_with_delimiter: {
        Args: {
          bucket_id: string
          delimiter_param: string
          max_keys?: number
          next_token?: string
          prefix_param: string
          start_after?: string
        }
        Returns: {
          id: string
          metadata: Json
          name: string
          updated_at: string
        }[]
      }
      operation: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      search: {
        Args: {
          bucketname: string
          levels?: number
          limits?: number
          offsets?: number
          prefix: string
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          created_at: string
          id: string
          last_accessed_at: string
          metadata: Json
          name: string
          updated_at: string
        }[]
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      lang: ["en", "es"],
      status: ["draft", "archived", "published"],
    },
  },
  storage: {
    Enums: {},
  },
} as const
